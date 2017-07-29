import { createProvider } from '../records/Provider';

const initialState = {authToken: undefined};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN':
      console.log('Logged in Reducer: ' + payload);
      return {
        authToken: payload,
      };

    case 'FETCHED_USER_EMAIL':
      console.log(`Fetched user email ${payload.email}`);
      return {
        email: payload.email
      }

  }
  return state;
}