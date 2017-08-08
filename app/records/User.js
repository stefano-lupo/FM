import Immutable, { Record, List } from 'immutable';


const UserRecord = new Record({
  _id: undefined,
  userAuthToken: undefined,
  firstName: undefined,
  lastName: undefined,
  jobs: {
    requested: new List(),
    active: new List(),
    completed: new List(),
  },
  reviews: new List(),
  rating: undefined,  
});

export class User extends UserRecord {
  // instance methods
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export function createUser(userData) {
  return new User({
    ...userData,
    jobs: {
      requested: new List(userData.jobs.requested),
      active: new List(userData.jobs.active),
      completed: new List(userData.jobs.completed)
    },
    reviews: List(userData.reviews),
  });
}