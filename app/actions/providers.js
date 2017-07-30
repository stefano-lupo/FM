import api from '../api/api';


export const fetchCategories = () => {
  return dispatch => {
    api.getCategories().then(response => {
      dispatch({type: 'FETCHED_CATEGORIES', payload: response});
    }).catch(error => console.log(error));
  };
};

export const fetchProvidersByCategory = (category) => {
  return dispatch => {
    api.getProvidersByCategory(category).then(response => {
      dispatch({type: 'FETCHED_PROVIDERS_BY_CATEGORY', payload: response});
    }).catch(error => console.log(error));
  };
};