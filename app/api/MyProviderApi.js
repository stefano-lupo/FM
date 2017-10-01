import Http from './HTTP';

const URL = 'http://192.168.1.10:3000';
// const URL = 'http://192.168.1.17:3000';
// const URL='http://192.168.192.50:3000';
// const URL = 'http://192.168.1.28:3000';
//  const URL = 'http://86.43.98.198:3000';

class MyProviderApi extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing MyProviderApi instance\n\n");
    super(url, tokenSource);
  }
}

export default providerApi = new MyProviderApi(URL, 'providerAuthToken');