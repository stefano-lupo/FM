import Immutable from 'immutable';

const MyProviderRecord = Immutable.Record({
  // Really should inherit these from Provider
  id: undefined,
  name: "Derp COmpany LTD",
  category: undefined,
  description: undefined,
  score: undefined,
  images: new Immutable.List(),
  thumbnail: undefined,

  // Extra stuff for user's provider
  auth: {
    token: undefined,
    expiresAt: undefined
  },
});

export class MyProvider extends MyProviderRecord {
  /*
   constructor(providerData) {
   super(providerData);
   }
   */
}

export const createMyProvider = (providerData) => {
  return new MyProvider({
    ...providerData,
    thumbnail: providerData.thumbnail || "https://cdn2.iconfinder.com/data/icons/business-office-4/256/Office-512.png"
  })
};