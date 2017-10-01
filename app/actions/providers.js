import providerApi from '../api/MyProviderApi';


export const fetchCategories = () => {
  return dispatch => {
    providerApi.getCategories().then(response => {
      dispatch({type: 'FETCHED_CATEGORIES', payload: response});
    }).catch(error => console.log(error));
  };
};

export const fetchProvidersByCategory = (category) => {
  return dispatch => {
    providerApi.getProvidersByCategory(category).then(response => {
      dispatch({type: 'FETCHED_PROVIDERS_BY_CATEGORY', payload: response});
    }).catch(error => console.log(error));
  };
};