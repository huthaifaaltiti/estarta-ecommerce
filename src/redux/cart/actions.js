// constants
import * as CART_CONSTANTS from "./constants";

export const AddProductToCart = (product) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.ADD_TO_CART,
    payload: product,
  });
};
