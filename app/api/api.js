import Request from './request';

const URL = 'http://192.168.1.10:3000';
let request = new Request();

class Api {

  static fetchCategories() {
    return (
      request.get('/categories')
    );
  }

  static fetchProvidersByCategory(category) {
    return (
      request.get('/providers/category/', [{ category }])
    )
  }

  static logIn(fbAccessToken) {
    return (
      request.post('/auth/facebook', { fbAccessToken })
    );
  }

}

export default Api;