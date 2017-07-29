import FBApi from '../api/fbApi';

export const loggedIn = (accessToken) => {
  console.log("Logged in action: " + accessToken);
  FBApi.setAccessToken(accessToken)
  return dispatch => {
    FBApi.fetchUserEmail().then((response) => {
      console.log(response);
      dispatch({type: 'FETCHED_USER_EMAIL', payload: response})
    });
  }

};
