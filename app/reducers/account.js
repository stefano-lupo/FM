import { Account, createAccount } from '../records/Account';

const initialState = new Account();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      const { account, fbAccessToken } = payload;
      // Note FB access token may be null if normal login used
      console.log(account);
      return createAccount(account, fbAccessToken);
    }
  }

  return state;
}