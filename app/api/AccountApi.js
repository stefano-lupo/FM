import Http from './HTTP';

const URL = 'http://192.168.1.10:3000';
// const URL = 'http://192.168.1.17:3000';
// const URL='http://192.168.192.50:3000';
// const URL = 'http://192.168.1.28:3000';
//  const URL = 'http://86.43.98.198:3000';

class AccountApi extends Http {

  constructor(url, tokenSource) {
    console.log("\n\n**************************constructing AccountApi instance\n\n");
    super(url, tokenSource);
  }



  // Account Logins (Top Level)

  loginWithFb(fbAccessToken) {
    return this.post('/auth/facebook', { fbAccessToken });
  }

  login(email, password) {
    return this.post('/auth/login', { email, password });
  }

  register(registerForm) {
    return this.post('/auth/register', { ...registerForm });
  }


  // Provider / User Logins
  // Note these are here as they require the accountAuthToken but the results are stored in myProvider in state
  loginMyProvider(id) {
    return this.get(`/me/provider/${id}`, []);
  }

  registerMyProvider(registerForm) {
    return this.post('/me/provider', {...registerForm});
  }
}

export default accountApi = new AccountApi(URL, 'accountAuthToken');