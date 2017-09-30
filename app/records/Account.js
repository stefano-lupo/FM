import { Record } from 'immutable';
import Immutable, { List } from 'immutable';

import { User } from './User';
import { createProvider } from './Provider';

const AccountRecord = Immutable.Record({
  id: undefined,
  auth: undefined,
  fbAccessToken: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  providers: new List(),
});

export class Account extends AccountRecord {

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}



export function createAccount(accountData) {
  return new Account({
    ...accountData,
    providers: List(accountData.providers.map(provider => createProvider(provider))),
  })
}