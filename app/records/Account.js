import { Record } from 'immutable';

import { User } from './User';

export const Account = new Record({
  authToken: undefined,       // should become auth object with token and expiry fields
  fbAccessToken: undefined,
  user: new User(),
});



export function createAccount(accountData) {
  console.log(accountData);
  const { images, reviews, _id } = accountData;

  return new Account({
    ...accountData,
    id: _id,
    images: new Immutable.List(images),
    reviews: new Immutable.List(reviews)
  })
}