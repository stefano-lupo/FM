import { User, createUser } from '../records/User';

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
  }
  return state;
}