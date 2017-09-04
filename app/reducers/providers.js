import { createProvider } from '../records/Provider';

import { List, Map } from 'immutable';

const initialState = new Map();

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    //
    // case 'FETCHED_CATEGORIES':
    //   const categories = List(payload);
    //   return state.merge({ categories });
    //
    // case 'FETCHED_PROVIDERS_BY_CATEGORY':
    //   const providersByCategory = List(payload.map((provider) => createProvider(provider)));
    //   return state.merge({ providersByCategory });
  }
  return state;
}