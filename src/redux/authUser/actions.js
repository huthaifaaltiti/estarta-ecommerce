// Auth constants
import * as AUTH_USER_CONSTANTS from "./constants";
// magic
import magic from "../../lib/magic-sdk";
// react-router-dom
import { useNavigate } from "react-router-dom";

// Note: action is simply a function
export function Login(email) {
  return async (dispatch) => {
    dispatch({
      type: AUTH_USER_CONSTANTS.AUTH_USER_LOADING,
    });

    try {
      const res = await magic.auth.loginWithMagicLink({ email });
      if (res) {
        const Token = await magic.user.getIdToken();
        const userMetadata = await magic.user.getMetadata();
        dispatch({
          type: AUTH_USER_CONSTANTS.AUTH_USER_SUCCESS,
          payload: { Token, userMetadata },
        });
      }
    } catch (error) {
      dispatch({
        type: AUTH_USER_CONSTANTS.AUTH_USER_ERROR,
        payload: error,
      });
    }
  };
}
