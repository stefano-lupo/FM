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
  User: new User(),
});



export function createAccount(accountData, accountAuthToken) {
  return new Account({
    ...accountData,
    providers: new List(accountData.providers),
    user: new User(),
    accountAuthToken,
  })
}