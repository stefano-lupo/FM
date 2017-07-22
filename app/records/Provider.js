import Immutable from 'immutable';

const ProviderRecord = Immutable.Record({
  id: undefined,
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
    console.log("Getting name");
    return `${this.firstName} ${this.lastName}`;
  }
}

export function createProvider(providerData) {
  console.log(providerData);
  const { images, reviews, _id } = providerData;

  return new Provider({
    ...providerData,
    id: _id,
    images: new Immutable.List(images),
    reviews: new Immutable.List(reviews)
  })
}