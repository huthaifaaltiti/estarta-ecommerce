// wishlist constants
import * as WISHLIST_CONSTANTS from "./constants";

export const AddProductToWishlist = (product) => (dispatch) => {
  dispatch({
    type: WISHLIST_CONSTANTS.WISHLIST_ADD_ITEM,
    payload: product,
  });
};

export const DeleteWishlistItem = (wishlistItem) => (dispatch) => {
  dispatch({
    type: WISHLIST_CONSTANTS.WISHLIST_REMOVE_ITEM,
    payload: wishlistItem,
  });
};

export const AddProductToCart = (wishlistItem) => (dispatch) => {
  dispatch({
    type: WISHLIST_CONSTANTS.WISHLIST_ADD_TO_CART,
    payload: wishlistItem,
  });
};
