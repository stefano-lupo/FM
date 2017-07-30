import api from '../api/api';

export const loggedInToFB = (fbAccessToken) => {
  return dispatch => {
    dispatch({type: 'LOGGED_IN_TO_FB', payload: fbAccessToken});
    api.logIn(fbAccessToken).then(payload => {
      if(payload.isLoggedIn) {
        dispatch({ type: 'LOGGED_IN', payload });
      }
    }).catch(error => console.log(error));
  }
};

