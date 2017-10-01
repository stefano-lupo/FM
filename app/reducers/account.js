import { Account, createAccount } from '../records/Account';

const initialState = new Account();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      // Note FB access token may be null if normal login used
      return createAccount(payload);
    }

    case 'REGISTERED_SERVICE_PROVIDER': {

    }
  }

  return state;
}