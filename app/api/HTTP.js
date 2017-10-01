import { store } from '../../App';

class HTTP {

  constructor(URL, tokenSource) {
    this.url = URL;
    this.tokenSource = tokenSource;
    console.log(`\n\n**************************Constructing http, type = ${tokenSource}\n\n`);
  }

  getHeaders() {
    const account = store.getState().get('account');
    const user = store.getState().get('user');
    const myProvider = store.getState().get('myProvider');

    let headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
    };

    if(this.tokenSource === 'fbAccessToken') {
      headers.Authorization = `OAuth ${account.get('fbAccessToken')}`;
    } else if(this.tokenSource === 'accountAuthToken') {
      headers['x-access-token'] = account.get('auth').token;
    } else if(this.tokenSource === 'userAuthToken') {
      headers['x-access-token'] = user.get('auth').token;
    } else if(this.tokenSource === 'providerAuthToken') {
      headers['x-access-token'] = myProvider.get('auth').token;
    }

    return headers;
  }

  async get(endpoint, params = []) {
    params.map((paramObj) => {
      Object.keys(paramObj).map((paramKey) => {
        endpoint += '?' + encodeURIComponent(paramKey) + '=' + encodeURIComponent(paramObj[paramKey]) + '&';
      })
    });

    try {
      let response = await fetch(this.url + endpoint,
        {
          headers: this.getHeaders(),
          method: 'GET',
        }
      );
      let validated = {ok: response.ok};
      validated.json = await response.json();
      return validated;
    } catch (err) {
      console.log(`Error occured in HTTP GET: ${err}`);
    }
  }

  async post(endpoint, body) {
    try {
      let response = await fetch(this.url + endpoint,
        {
          headers: this.getHeaders(),
          method: 'POST',
          body: JSON.stringify(body)
        }
      );
      let validated = {ok: response.ok};
      validated.json = await response.json();
      return validated;
    } catch (err) {
      console.log(`Error occured in HTTP POST: ${err}`);
    }
  }
}

export default HTTP;