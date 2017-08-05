import { createProvider } from '../records/Provider';

const initialState = {categories: null};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'FETCHED_CATEGORIES':
      console.log("Fetched Categories");
      console.log(payload);
      return {
        categories: payload,
      };

    case 'FETCHED_PROVIDERS_BY_CATEGORY':
      const providersByCategory = payload.map((provider) => createProvider(provider));
      return {
        providersByCategory
      }

  }
  return state;
}