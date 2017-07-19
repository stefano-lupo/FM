const URL = 'http://10.0.0.3:3000'

class Api {
  getUsers(){
    console.log("Fetching users");
    return fetch(`${URL}/users`)
      .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  }
}

export default Api;