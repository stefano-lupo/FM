import Immutable from 'immutable';

const JobRecord = Immutable.Record({
  _id: undefined,
  userID: undefined,
  providerID: undefined,
  title: undefined,
  description: undefined,
  requestDate: undefined,
  startDate: undefined,
  completionDate: undefined,
  category: undefined,
  status: undefined,
  review: undefined,
});

export class Job extends JobRecord {

}

export const createJob = (jobData) => {

  return new Job({
    ...jobData,
    requestDate: new Date(),
    status: 'requested',
  })
};