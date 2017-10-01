import accountApi from '../api/AccountApi';

export const loggedInToFB = (fbAccessToken) => {
  return async (dispatch) => {
    const payload = await accountApi.loginWithFb(fbAccessToken);
    if(payload.ok) {
      payload.json.fbAccessToken = fbAccessToken;
      dispatch({ type: 'LOGGED_IN', payload: payload.json});
    }
  }
};

export const login = (email, password) => {
  return dispatch => {
    accountApi.login(email, password).then(payload => {
      if(payload.success) {
        dispatch({type: 'LOGGED_IN', payload});
      }
    }).catch(error => console.log(`error here ${error}`));
  }
};

export const register = (registerForm) => {
  return dispatch => {
    accountApi.register(registerForm).then(payload => {
      if(payload.success) {
        dispatch({ type: 'LOGGED_IN', payload });
      }
      return null;
    }).catch(error => console.log(error));
  }
};

export const registerMyProvider = (registerForm) => {
  return async (dispatch) => {
    const payload = await accountApi.registerMyProvider(registerForm);
    if(payload.ok) {
      dispatch({type: 'REGISTERED_PROVIDER', payload: payload.json});
    }
  }
};

export const loginMyProvider = (providerId) => {
  return async (dispatch) => {
    const payload = await accountApi.loginMyProvider(providerId);
    if(payload.ok) {
      dispatch({type: 'LOGGED_IN_PROVIDER', payload: payload.json});
    }
  }
};