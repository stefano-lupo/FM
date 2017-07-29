import Request from './request';

const URL = 'https://graph.facebook.com/';

let request = new Request(URL);

class FBApi {

  static setAccessToken(accessToken) {
    console.log(`Setting access token: ${accessToken}`);
    this.accessToken = accessToken;
  }

  static fetchUserEmail() {
    return request.get(`me?fields=email&access_token=${this.accessToken}`);
  }
}

export default FBApi;