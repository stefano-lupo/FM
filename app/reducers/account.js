import { createProvider } from '../records/Provider';

const initialState = {authToken: undefined};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN':
      console.log(`Logged in Reducer: ${payload.message}`);
      const { authToken } = payload;
      return {
        authToken
      };

    case 'LOG_IN_FAILED':
      console.log(`Log In failed ${payload.message}`);
      return {
        authToken: null
      };
  }

  return state;
}