import Immutable from 'immutable';

const ProviderRecord = Immutable.Record({
  id: undefined,
  name: "Derp COmpany LTD",
  category: undefined,
  description: undefined,
  score: undefined,
  images: new Immutable.List(),
  thumbnail: undefined,
  reviews: new Immutable.List(),
});

export class Provider extends ProviderRecord {

}

export const createProvider = (providerData) => {
  const { images, reviews, _id } = providerData;

  return new Provider({
    ...providerData,
    _id,
    images: new Immutable.List(images),
    reviews: new Immutable.List(reviews),
    thumbnail: providerData.thumbnail || "https://cdn2.iconfinder.com/data/icons/business-office-4/256/Office-512.png"
  })
}