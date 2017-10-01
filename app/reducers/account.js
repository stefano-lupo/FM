import { Account, createAccount } from '../records/Account';

import { MyProvider, createMyProvider } from '../records/MyProvider';

const initialState = new Account();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    // Note FB access token may be null if normal login used
    case 'LOGGED_IN': {
      return createAccount(payload);
    }
  }

  return state;
}