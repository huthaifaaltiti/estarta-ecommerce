// constants
import * as CART_CONSTANTS from "./constants";

export const AddProductToCart = (product) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.ADD_TO_CART,
    payload: product,
  });
};

export const RemoveProductFromCart = (cartItem) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.REMOVE_FROM_CART,
    payload: cartItem,
  });
};
