import Immutable from 'immutable';
import moment from 'moment';

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
    requestDate: jobData.requestDate ? moment(jobData.requestDate) : undefined,
    startDate: jobData.startDate ? moment(jobData.startDate) : undefined,
    completionDate: jobData.completionDate ? moment(jobData.completionDate) : undefined,
  })
};