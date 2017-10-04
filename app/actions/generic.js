import { store } from '../../App';

import MyProviderApi from '../api/MyProviderApi';
import UserApi from '../api/UserApi';
import CONSTANTS from '../constants/constants';
import ROUTES from '../constants/routes';

function getApi() {
  const { loggedInAs } = store.getState().get('account');
  if(loggedInAs === CONSTANTS.PROVIDER) {
    return MyProviderApi;
  }

  return UserApi;
}

export const fetchCategories = () => {
  const api = getApi();
  return dispatch => {
    api.getCategories().then(response => {
      dispatch({type: ROUTES.FETCHED_CATEGORIES, payload: response});
    }).catch(error => console.log(error));
  };
};

export const fetchProvidersByCategory = (category) => {
  const api = getApi();
  return dispatch => {
    api.getProvidersByCategory(category).then(response => {
      dispatch({type: ROUTES.FETCHED_PROVIDERS_BY_CATEGORY, payload: response});
    }).catch(error => console.log(error));
  };
};