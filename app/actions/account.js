import Api from '../api/api';
import FBApi from '../api/fbApi';



export const loggedIn = (authToken) => {
  console.log("Logged in action: " + authToken);
  FBApi.setAuthToken(authToken);
  return FBApi.fetchUserEmail()
    .then((email) => {
      return dispatch => {
        console.log(`Email: ${email}`);
        Api.logIn(authToken, email).then(response => {
          dispatch({type: 'LOGGED_IN', payload: response});
        }).catch(error => console.log(error));
      };
    });
};
