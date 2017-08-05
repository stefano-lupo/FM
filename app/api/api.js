import Http from './http';

// const URL = 'http://192.168.1.10:3000';
// const URL='http://10.0.0.9:3000';
const URL = 'http://192.168.1.28:3000';
//  const URL = 'http://86.43.98.198:3000';

class Api extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing api instance\n\n");
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

   logIn(fbAccessToken) {
    return this.post('/auth/facebook', { fbAccessToken });
  }

  register(registerForm) {
    return this.post('/auth/register', { registerForm });
  }

}

export default api = new Api(URL, 'authToken');