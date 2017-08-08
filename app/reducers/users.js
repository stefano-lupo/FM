import { User, createUser } from '../records/User';
import { Job, createJob } from '../records/Job';

const initialState = new User();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      let { user } = payload;
      console.log(`Logged in User reducer`);
      user = createUser(user);
      console.log(user);
      return user;
    }

    case 'JOB_REQUESTED': {

      const job = createJob(payload);
      console.log(job);

      const requested = state.jobs.requested;
      console.log(requested.isList());

      requested.merge(job);

      return state.jobs.merge({requested});
    }
  }
  return state;
}