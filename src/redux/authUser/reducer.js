// constants
import * as AUTH_USER_CONSTANTS from "./constants";

//  auth reducer
const initState = {
  // at actions file we got a token and user in local storage so if these data still found, isAuth should be true always and the user will be auth. => !! converts string to boolean
  isAuth: !!localStorage.getItem("token") || false,
  user: JSON.parse(localStorage.getItem("user")) || {},
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
        user: action.payload.userMetadata,
        token: action.payload.Token,
      };

    case AUTH_USER_CONSTANTS.AUTH_USER_CLEAR:
      return {
        loading: false,
        isAuth: false,
        error: null,
        user: {},
        token: "",
      };

    case AUTH_USER_CONSTANTS.AUTH_USER_LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default authReducer;
