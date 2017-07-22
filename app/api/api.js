import Request from './request';

const URL = 'http://192.168.1.10:3000';
let request = new Request();

class Api {
  getUsers() {
    console.log("Fetching users");
    return (fetch(`${URL}/users`)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          return responseJson;
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        })
    );
  }

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
}

export default Api;