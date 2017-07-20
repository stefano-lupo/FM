import Api from '../api/api';

const mApi = new Api();


export const fetchCategories = () => {
  console.log("Fetch categories action");
  return dispatch => {
    mApi.getCategories().then(response => {
      dispatch({type: 'FETCHED_CATEGORIES', payload: response});
    }).catch(error => console.log(error));
  };
};