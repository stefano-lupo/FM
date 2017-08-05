import { Record } from 'immutable';
import { List } from 'immutable';

import { User } from './User';

export const Account = new Record({
  accountAuthToken: undefined,       // should become auth object with token and expiry fields
  fbAccessToken: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  providers: new List(),
});



export function createAccount(accountData, fbAccessToken) {
  return new Account({
    fbAccessToken,
    ...accountData,
    providers: new List(accountData.providers),
  })
}