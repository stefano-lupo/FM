import { store } from '../../App';

class Http {

  constructor(URL, tokenSource) {
    this.url = URL;
    this.tokenSource = tokenSource;
    console.log(`\n\n**************************Constructing http, type = ${tokenSource}\n\n`);
  }

  getHeaders() {
    const account = store.getState().account;
    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if(this.tokenSource === 'fbAccessToken') {
      console.log(`tokenSource = ${this.tokenSource}`);
      console.log(`account.tokensource = ${account[this.tokenSource]}`);
      headers.Authorization = `OAuth ${account[this.tokenSource]}`;
    } else {
      headers['x-access-token'] = account[this.tokenSource];
    }
    return headers;
  }

  get(endpoint, params = []) {

    params.map((paramObj) => {
      Object.keys(paramObj).map((paramKey) => {
        endpoint += '?' + encodeURIComponent(paramKey) + '=' + encodeURIComponent(paramObj[paramKey]) + '&';
      })
    });

    //console.log(`${this.url}${endpoint}`);

    return fetch(`${this.url}${endpoint}`,{method: "GET", headers: this.getHeaders()})
      .then(function(response) {
        return response.json();
      }
    )
    .catch(err => console.log(err));
  }

  post(endpoint, body) {
    //console.log(`Posting ${this.url+endpoint}`);
    return fetch(this.url+endpoint,
      {
        headers: this.getHeaders(),
        method: 'POST',
        body: JSON.stringify(body)
      }
    ).then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
  }
}

export default Http;