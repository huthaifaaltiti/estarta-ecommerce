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

export const MinProductFromCart = (cartItem) => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.MIN_ITEM_FROM_CART,
    payload: cartItem,
  });
};

export const DeleteAllCartItems = () => (dispatch) => {
  dispatch({
    type: CART_CONSTANTS.CART_DELETE_ALL,
  });
};
