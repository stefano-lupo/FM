import api from '../api/api';

export const loggedInToFB = (fbAccessToken) => {
  return async (dispatch) => {
    const payload = await api.loginWithFb(fbAccessToken);
    if(payload.ok) {
      payload.json.fbAccessToken = fbAccessToken;
      dispatch({ type: 'LOGGED_IN', payload: payload.json});
    }
  }
};

export const login = (email, password) => {
  return dispatch => {
    api.login(email, password).then(payload => {
      if(payload.success) {
        dispatch({type: 'LOGGED_IN', payload});
      }
    }).catch(error => console.log(`error here ${error}`));
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