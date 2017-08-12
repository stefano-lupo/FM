import { User, createUser } from '../records/User';
import { Job, createJob } from '../records/Job';

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
  }
  return state;
}