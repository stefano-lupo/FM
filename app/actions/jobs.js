import api from '../api/api';
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

export const fetchMessages = (jobID) => {
  return dispatch => {
    api.getMessages(jobID).then(response => {
      dispatch({ type: 'FETCHED_MESSAGES', payload: { response, jobID }});
    }).catch(error => console.log(error));
  }
};