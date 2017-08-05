import { User } from '../records/User';

const initialState = new User();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN': {
      const { user } = payload;
      console.log(`Logged in User reducer`);
      console.log(user);
      return user;
    }
  }
  return state;
}