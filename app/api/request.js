//const URL = 'http://192.168.1.10:3000';
const URL='http://10.0.0.9:3000';
// const URL = 'http://86.43.98.198:3000';

const headers = {
  "Content-Type": "application/json"
};

class Request {

  constructor(url = URL) {
    console.log(`Setting URL to ${url}`);
    this.url = url;
  }

  get(endpoint = "", params = []) {

    params.map((paramObj) => {
      Object.keys(paramObj).map((paramKey) => {
        endpoint += '?' + encodeURIComponent(paramKey) + '=' + encodeURIComponent(paramObj[paramKey]) + '&';
      })
    });

    console.log(`${this.url}${endpoint}`);

    return fetch(`${this.url}${endpoint}`,{method: "GET", headers})
      .then(function(response) {
        return response.json();
      }
    )
  }

  static post(endpoint = "", params=[]) {

  }

}

export default Request;