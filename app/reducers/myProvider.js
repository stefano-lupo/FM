import { createMyProvider } from '../records/MyProvider';

import { Map } from 'immutable';

const initialState = new Map();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN_PROVIDER': {
      return createMyProvider(payload);
    }

    case 'REGISTERED_PROVIDER': {
      return createMyProvider(payload);
    }
  }

  return state;
}