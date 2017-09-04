import Immutable, { Record, List, Map } from 'immutable';
import { createJob } from './Job';


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
  return null;
  return new User({
    ...userData,
    jobs: new Map({
      requested: userData.jobs ? new List(userData.jobs.requested.map(job => createJob(job))) : new List(),
      active: userData.jobs ? new List(userData.jobs.active.map(job => createJob(job))) : new List(),
      completed: userData.jobs ? new List(userData.jobs.completed.map(job => createJob(job))) : new List()
    }),
    reviews: List(userData.reviews),
  });
}