import api from '../api/UserApi';
import { createJob } from '../records/Job'

export const requestJob = (providerID, title, description, category) => {
  const jobRequest = {
    providerID,
    title,
    description,
    category
  };

  return dispatch => {
    api.requestJob(jobRequest).then(payload => {
      dispatch({ type: 'JOB_REQUESTED', payload });
    }).catch(error => console.log(error));
  }
};