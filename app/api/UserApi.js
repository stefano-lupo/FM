import Http, { URL } from './HTTP';

class UserApi extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing UserApi instance\n\n");
    super(url, tokenSource);
  }

  getCategories() {
    return (
      this.get('/categories')
    );
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