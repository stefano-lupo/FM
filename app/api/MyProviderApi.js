import Http, { URL } from './HTTP';

class MyProviderApi extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing MyProviderApi instance\n\n");
    super(url, tokenSource);
  }
}

export default providerApi = new MyProviderApi(URL, 'providerAuthToken');