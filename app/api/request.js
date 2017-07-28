const URL = 'http://192.168.1.10:3000';
// const URL = 'http://86.43.98.198:3000';
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

  post(endpoint = "", params=[]) {

  }

}

export default Request;