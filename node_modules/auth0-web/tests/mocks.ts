import * as mockery from 'mockery';
import {Auth0UserProfile, AuthOptions, LogoutOptions} from 'auth0-js';

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false
});

export const auth0Mock = {
  WebAuth: (properties: AuthOptions) => {
    let called = false;
    return {
      client: {
        userInfo: (accessToken: string, cb: (err, profile: Auth0UserProfile) => void) => {
          cb(null, {
            name: 'Bruno Krebs',
            nickname: 'brunokrebs',
            picture: 'https://cdn.auth0.com/blog/profile-picture/bruno-krebs.png',
            email: 'bruno.krebs@auth0.com',
            user_id: 'google-oauth2|100112663908880255058',
            clientID: '',
            identities: [],
            created_at: '1527222254673',
            updated_at: '1527222254673',
            sub: 'google-oauth2|100112663908880255058',
          });
        }
      },
      parseHash: (cb) => {
        const accessToken = 'some-access-token';
        const idToken = 'some-id-token';
        const expiresIn = 1.5;
        cb(null, {accessToken, idToken, expiresIn})
      },
      properties: () => (properties),
      checkSession: (config, cb) => {
        cb(null, {
          accessToken: 'some-access-token'
        });
      },
      logout: () => {

      }
    }
  }
};

mockery.registerMock('auth0-js', auth0Mock);
