// constants
import * as AUTH_USER_CONSTANTS from "./constants";

//  auth reducer
const initState = {
  isAuth: false,
  user: {},
  token: null,
  loading: false,
  error: null,
};

function authReducer(state = initState, action) {
  switch (action.type) {
    case AUTH_USER_CONSTANTS.AUTH_USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case AUTH_USER_CONSTANTS.AUTH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case AUTH_USER_CONSTANTS.AUTH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        error: null,
        user: action.payload,
      };

    default:
      return state;
  }
}

export default authReducer;
