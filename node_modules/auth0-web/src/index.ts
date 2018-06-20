import {Auth0UserProfile, AuthOptions, WebAuth} from 'auth0-js';

const IMPLICTY_RESPONSE_TYPE = 'token id_token';

export interface AuthResult {
  accessToken: string,
  idToken: string,
  expiresIn: number
}

export interface Subscriber {
  (authenticated: boolean): void;
}

interface SubscriberMap {
  [key: string]: Subscriber;
}

export default class Auth0Web {
  protected _auth0Client: WebAuth;
  private _accessToken: string;
  private _currentProperties: AuthOptions;
  private _idToken: string;
  private _profile: Auth0UserProfile;
  private _subscribers: SubscriberMap = {};

  constructor(properties: AuthOptions) {
    this._currentProperties = properties;

    let {scope} = properties;
    scope = Auth0Web.normalizeScope(scope);

    this._auth0Client = new WebAuth({
      ...properties,
      scope,
      responseType: IMPLICTY_RESPONSE_TYPE
    });
  }

  public clearSession() {
    delete this._profile;
    delete this._accessToken;
    delete this._idToken;
    this.notifySubscribers(false);
  }

  getProfile(): Auth0UserProfile {
    return this._profile;
  }

  getIdToken(): string {
    return this._idToken;
  }

  getAccessToken(): string {
    return this._accessToken;
  }

  getProperties() {
    return this._currentProperties;
  }

  signIn(): void {
    this._auth0Client.authorize();
  }

  signOut(returnTo?: string): void {
    const {clientID} = this._currentProperties;
    this._auth0Client.logout({
      returnTo,
      clientID,
    });
  }

  isAuthenticated(): boolean {
    return this._accessToken != null;
  }

  parseHash(): Promise<Auth0UserProfile> {
    return new Promise((resolve, reject) => {
      this._auth0Client.parseHash(async (err, authResult: AuthResult) => {
        if (err) return reject(err);
        if (!authResult) resolve(null);
        window.location.hash = '';
        try {
          resolve(await this.loadProfile(authResult));
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  checkSession(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this._auth0Client.checkSession(this._currentProperties, async (error, authResult) => {
        if (error && error.error !== 'login_required') {
          // some other error
          return reject(error);
        } else if (error) {
          // explicit authentication required
          return resolve(false);
        }

        if (this.isAuthenticated()) {
          this.setAccessToken(authResult.accessToken, authResult.expiresIn);
          return resolve(true);
        }

        try {
          await this.handleAuthResult(authResult);
          resolve(true);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  // returns a function to unsubscribe
  subscribe(subscriber: Subscriber): () => void {
    const subscriberKey = Date.now();
    this._subscribers[subscriberKey] = subscriber;
    return () => {
      delete this._subscribers[subscriberKey];
    }
  }

  private setAccessToken(accessToken: string, expiresIn: number): void {
    this._accessToken = accessToken;
    // tries to refresh session before expering
    const timeout = setTimeout(() => {
      this.notifySubscribers(false);
      clearTimeout(timeout);
    }, expiresIn * 1000 - 1000);
  }

  private handleAuthResult(authResult: AuthResult): Promise<Auth0UserProfile> {
    window.location.hash = '';
    return this.loadProfile(authResult);
  }

  private loadProfile(authResult: AuthResult): Promise<Auth0UserProfile> {
    return new Promise((resolve, reject) => {
      this._auth0Client.client.userInfo(authResult.accessToken, (err, profile: Auth0UserProfile) => {
        if (err) return reject(err);

        this.setAccessToken(authResult.accessToken, authResult.expiresIn);
        this._idToken = authResult.idToken;
        this._profile = profile;

        this.notifySubscribers(true);
        resolve();
      });
    });
  }

  private notifySubscribers(authenticated: boolean) {
    Object.keys(this._subscribers).forEach((subscriberKey: string) => {
      this._subscribers[subscriberKey](authenticated);
    });
  }

  private static normalizeScope(scope = 'openid') {
    if (scope.indexOf('openid') < 0) {
      scope = `openid ${scope}`;
    }
    return scope;
  }
}
