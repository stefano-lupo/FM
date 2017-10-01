import Http from './HTTP';

const URL = 'https://graph.facebook.com';

class FBApi extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing facebook api instance\n\n");
    super(url, tokenSource);
  }

  // Ready for facebook methods
  getUserFBProfilePicture() {
    console.log("Getting cover photo");
    return this.get('/me', [{fields: 'cover'}]);
  }


}

export default fbApi = new FBApi(URL, 'fbAccessToken');