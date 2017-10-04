import { URL } from './HTTP';
import Generic from './Generic';

class MyProviderApi extends Generic {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing MyProviderApi instance\n\n");
    super(url, tokenSource);
  }
}

export default providerApi = new MyProviderApi(URL, 'providerAuthToken');