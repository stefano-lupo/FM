const URL = 'http://192.168.1.11:3000';

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

  getCategories() {
    return (
      fetch(`${URL}/categories`)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        })
        .catch((error) => {
          console.log(`Error: ${error}`);
        })
    )
  }
}

export default Api;