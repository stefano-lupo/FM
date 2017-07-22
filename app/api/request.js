const URL = 'http://192.168.1.10:3000';

const headers = {
  "Content-Type": "application/json"
};

class Request {

  get(endpoint = "", params = []) {

    params.map((paramObj) => {
      Object.keys(paramObj).map((paramKey) => {
        endpoint += '?' + encodeURIComponent(paramKey) + '=' + encodeURIComponent(paramObj[paramKey]) + '&';
      })
    });

    console.log(`${URL}${endpoint}`);

    return fetch(`${URL}${endpoint}`,{method: "GET", headers})
      .then(function(response) {
        return response.json();
      }
    )
  }

}

export default Request;