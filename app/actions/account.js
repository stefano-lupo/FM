import api from '../api/api';

export const loggedInToFB = (fbAccessToken) => {
  return dispatch => {
    api.loginWithFb(fbAccessToken).then(payload => {
      if(payload.success) {
        // Note this will be handled by 2 reducers: one for acc, one for user
        dispatch({ type: 'LOGGED_IN', payload: {...payload, fbAccessToken}});
      }
    }).catch(error => console.log(error));
  }
};

export const login = (email, password) => {
  return dispatch => {
    api.login(email, password).then(payload => {
      if(payload.success) {
        console.log(payload);
        // Note this will be handled by 2 reducers: one for acc, one for user
        dispatch({type: 'LOGGED_IN', payload});
      }
    }).catch(error => console.log(error));
  }
};

export const register = (registerForm) => {
  return dispatch => {
    api.register(registerForm).then(payload => {
      if(payload.success) {
        dispatch({ type: 'LOGGED_IN', payload });
      }
      return null;
    }).catch(error => console.log(error));
  }
};