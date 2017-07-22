import Api from '../api/api';

//const api = new Api();


export const fetchCategories = () => {
  console.log("Fetch categories action");
  return dispatch => {
    Api.fetchCategories().then(response => {
      dispatch({type: 'FETCHED_CATEGORIES', payload: response});
    }).catch(error => console.log(error));
  };
};

export const fetchProvidersByCategory = (category) => {
  console.log("Fetch Providers by Category action");
  return dispatch => {
    Api.fetchProvidersByCategory(category).then(response => {
      dispatch({type: 'FETCHED_PROVIDERS_BY_CATEGORY', payload: response});
    }).catch(error => console.log(error));
  };
};