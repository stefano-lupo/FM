import FBApi from '../api/fbApi';
import Api from '../api/api';

export const loggedInToFB = (fbAccessToken) => {
  console.log("Logged in action: " + fbAccessToken);
  FBApi.setAccessToken(fbAccessToken)
  return dispatch => {
    Api.logIn(fbAccessToken).then(payload => {
      console.log(payload);
      if(payload.isLoggedIn) {
        dispatch({ type: 'LOGGED_IN', payload });
      } else {
        dispatch({type: 'LOG_IN_FAILED', payload});
      }
    }).catch(error => console.log(error));
  }

};
