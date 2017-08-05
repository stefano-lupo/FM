import { Account, createAccount } from '../records/Account';

const initialState = new Account();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      const { account, fbAccessToken } = payload;
      console.log("Account logged in reducer");
      console.log(account);
      console.log(fbAccessToken);
      // Note FB access token may be null if normal login used
      return createAccount(account, fbAccessToken);
    }
  }

  return state;
}