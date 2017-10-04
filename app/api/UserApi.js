import Http, { URL } from './HTTP';
import App from './App';

class UserApi extends App {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing UserApi instance\n\n");
    super(url, tokenSource);
  }



  getProvidersByCategory(category) {
    return (
      this.get('/providers/category/', [{ category }])
    )
  }


  requestJob(jobRequest) {
    return this.post('/jobs/', { ...jobRequest });
  }

}

export default userApi = new UserApi(URL, 'userAuthToken');