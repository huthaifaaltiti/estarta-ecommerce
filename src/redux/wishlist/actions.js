// wishlist constants
import * as WISHLIST_CONSTANTS from "./constants";

export const AddProductToWishlist = (product) => (dispatch) => {
  dispatch({
    type: WISHLIST_CONSTANTS.WISHLIST_ADD_ITEM,
    payload: product,
  });
};
