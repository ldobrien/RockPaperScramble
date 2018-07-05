import './mocks';
import 'jsdom-global/register'

import * as chai from 'chai';
import Auth0Web, {Subscriber, AuthResult} from '../src';

const domain = 'bk-samples.auth0.com';
const clientID = 'Nr2S6us8e503J9qNFjgpy8Id6cGDHpjZ';
const redirectUri = 'http://app.local:3000/callback';

describe('Testing basic functionality of this wrapper', () => {

  it('should be able to use public API', checkPublicAPI);
  it('should be able to generate new instances', checkConstructor);
  it('should be able to parseHash and authenticate', checkParseHash);
  it('should clear session', checkSignOut);
  it('should be able to return profile', checkGetProfile);
  it('should be able to support subscribers', checkSubscribeAuthenticated);
  it('should be able to support subscribers when not auth', checkSubscribeUnauthenticated);
  it('should support silent auth', checkSilentAuth);
  it('should notify subscribers on expire', checkTimeout);

  function checkPublicAPI() {
    chai.expect(Auth0Web).to.not.be.undefined;

    const subscriber: Subscriber = (authenticated) => {};
    chai.expect(subscriber).to.not.be.undefined;

    const authenticationResult: AuthResult = {
      accessToken: '', idToken: '', expiresIn: 0,
    };
    chai.expect(authenticationResult).to.not.be.undefined;
  }

  function checkConstructor() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    const currentProperties = auth0Client.getProperties();
    chai.expect(currentProperties.domain).to.be.equal(domain);
    chai.expect(currentProperties.clientID).to.be.equal(clientID);
    chai.expect(currentProperties.redirectUri).to.be.equal(redirectUri);
    chai.expect(currentProperties.audience).to.be.undefined;
  }

  async function checkParseHash() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    chai.expect(auth0Client.isAuthenticated()).to.be.false;
    await auth0Client.parseHash();
    chai.expect(auth0Client.isAuthenticated()).to.be.true;
  }

  async function checkSignOut() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    await auth0Client.parseHash();

    chai.expect(auth0Client.isAuthenticated()).to.be.true;
    chai.expect(auth0Client.getProfile()).not.to.be.undefined;
    chai.expect(auth0Client.getAccessToken()).not.to.be.undefined;

    auth0Client.signOut();
    auth0Client.clearSession();

    chai.expect(auth0Client.isAuthenticated()).to.be.false;
    chai.expect(auth0Client.getProfile()).to.be.undefined;
    chai.expect(auth0Client.getAccessToken()).to.be.undefined;
  }

  function checkGetProfile() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    chai.expect(auth0Client.getProfile()).to.be.undefined;
    auth0Client.parseHash();
    chai.expect(auth0Client.getProfile()).not.to.be.null;
    chai.expect(auth0Client.getProfile()).not.to.be.undefined;
  }

  function checkSubscribeAuthenticated(done) {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    chai.expect(auth0Client.isAuthenticated()).to.be.false;

    const unsubscribe = auth0Client.subscribe(signedIn => {
      chai.expect(signedIn).to.be.equal(auth0Client.isAuthenticated());
      done();
    });

    auth0Client.parseHash();
    unsubscribe();
  }

  function checkSubscribeUnauthenticated() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    const unsubscribe = auth0Client.subscribe(() => {});
    unsubscribe();
  }

  function checkSilentAuth() {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    chai.expect(auth0Client.getAccessToken()).to.be.undefined;
    auth0Client.checkSession();
    chai.expect(auth0Client.getAccessToken()).not.to.be.undefined;
  }

  function checkTimeout(done) {
    const auth0Client = new Auth0Web({
      domain,
      clientID,
      redirectUri,
    });

    auth0Client.parseHash().then(() => {
      const timeout = setTimeout(() => {
        chai.expect(auth0Client.isAuthenticated()).to.be.true;
        clearTimeout(timeout);
        done();
      }, 1500);
    });
  }
});
