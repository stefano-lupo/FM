import { URL } from './HTTP';
import App from './App';

class MyProviderApi extends App {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing MyProviderApi instance\n\n");
    super(url, tokenSource);
  }
}

export default providerApi = new MyProviderApi(URL, 'providerAuthToken');