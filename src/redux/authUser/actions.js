// Auth constants
import * as AUTH_USER_CONSTANTS from "./constants";
// magic
import magic from "../../lib/magic-sdk";
// react-router-dom

// Note: action is simply a function
export function Login(email) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_USER_CONSTANTS.AUTH_USER_LOADING,
    });

    try {
      const res = await magic.auth.loginWithMagicLink({ email });
      if (res) {
        // magic API methods to get token and user email
        const Token = await magic.user.getIdToken();
        const userMetadata = await magic.user.getMetadata();

        // after user logged in put some data in local storage
        localStorage.setItem("token", Token);
        // setItem("key", itsValue) the value should be string so userMetadata is an object so should convert it
        localStorage.setItem("user", JSON.stringify(userMetadata));

        dispatch({
          type: AUTH_USER_CONSTANTS.AUTH_USER_SUCCESS,
          payload: { Token, userMetadata },
        });

        return true;
      }
    } catch (error) {
      dispatch({
        type: AUTH_USER_CONSTANTS.AUTH_USER_ERROR,
        payload: error,
      });

      return false;
    }
  };
}
