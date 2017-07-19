import Api from '../api/api';

const Api = new Api();

export const fetchUsers = () => {
  return dispatch => {
    dispatch(loadingUsers());
    wynkApi.getUsers(offset).then(response => {
      dispatch(fetchedUsers(response));
    }).catch(error => console.log(error));
  };
};