import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'rockpaperscramble.auth0.com',
    clientID: '1scdbL453X5QnKochfR555EqEoM7lb4e',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://rockpaperscramble.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}