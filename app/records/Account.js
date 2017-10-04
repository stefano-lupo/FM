import { Record } from 'immutable';
import Immutable, { List } from 'immutable';

import { User } from './User';
import { createProvider } from './Provider';
import { createMyProvider } from './MyProvider';

const AccountRecord = Immutable.Record({
  id: undefined,
  auth: {
    token: undefined,
    expiresAt: undefined
  },
  fbAccessToken: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
  loggedInAs: undefined,
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
    // MyProviders data stored in account is minimal (name, id and thumbnail) for choosing
    // which provider you want to login as.
    providers: List(accountData.providers.map(provider => createMyProvider(provider))),
  })
}