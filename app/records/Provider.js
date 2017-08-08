import Immutable from 'immutable';

const ProviderRecord = Immutable.Record({
  _id: undefined,
  firstName: "Joe",
  lastName: "Blogs",
  email: undefined,
  category: undefined,
  score: undefined,
  images: new Immutable.List(),
  thumbnail: undefined,
  description: undefined,
  reviews: new Immutable.List(),
});

export class Provider extends ProviderRecord {

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export const createProvider = (providerData) => {
  const { images, reviews, _id } = providerData;

  return new Provider({
    ...providerData,
    _id,
    images: new Immutable.List(images),
    reviews: new Immutable.List(reviews)
  })
}