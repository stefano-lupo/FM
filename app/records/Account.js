import { Record } from 'immutable';
import { List } from 'immutable';

import { User } from './User';

export const Account = new Record({
  id: undefined,
  auth: undefined,
  fbAccessToken: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  providers: new List(),
});



export function createAccount(accountData) {
  console.log(accountData);
  return new Account({
    ...accountData,
    providers: new List(),
  })
}