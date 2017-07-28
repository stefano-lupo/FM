import Request from './request';

const URL = 'https://graph.facebook.com/';


class fbApi {

  static setAuthToken(authToken) {
    this.authToken = authToken;
  }

  static fetchUserEmail() {
    return fetch(`${URL}me?fields=email&access_token=${this.authToken}`)
      .then((response) => { return response.json(); });
  }

  static fetchProvidersByCategory(category) {
    return (
      request.get('/providers/category/', [{ category }])
    )
  }
}

export default Api;