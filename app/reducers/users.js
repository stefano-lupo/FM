import { User, createUser } from '../records/User';
import { Job, createJob } from '../records/Job';
import { Message, createMessage } from '../records/Message';

import { isImmutable, List } from 'immutable';

const initialState = new User();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      let { user } = payload;
      console.log(`Logged in User reducer`);
      console.log(payload);
      user = createUser(user);

      return user;
    }

    case 'JOB_REQUESTED': {

      const job = createJob(payload);
      console.log(job);

      const jobs = state.jobs.merge({ requested: state.jobs.get('requested').push(job) });


      return state.merge({ jobs });
    }

    case 'FETCHED_MESSAGES': {
      const { response: { messages }, jobID } = payload;

      const newMessages = messages.map((message) => {
          return createMessage(message);
        }
      );

      const index = state.jobs.get('requested').findIndex((job) => {
          return job.get('_id') === jobID;
        }
      );
      console.log(index);
      const job = state.jobs.get('requested').get(index).merge({ messages: newMessages })

      console.log("Merging job");
      // console.log(job);

      console.log(state.jobs.get('requested').get(index));
      return state.jobs.get('requested').update(index, (oldJob) => {
        return job
      });

    }
  }

  return state;
}