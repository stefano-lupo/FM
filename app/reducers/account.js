const initialState = {authToken: undefined};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'LOGGED_IN_TO_FB': {
      const fbAccessToken = payload;
      return {
        ...state,
        fbAccessToken
      };
    }

    case 'LOGGED_IN':
      const { authToken, user } = payload;
      return {
        ...state,
        authToken,
        user
      };
  }

  return state;
}