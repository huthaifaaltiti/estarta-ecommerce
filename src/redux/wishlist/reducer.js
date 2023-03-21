// wishlist constants
import * as WISHLIST_CONSTANTS from "./constants";

// Wishlist reducer
const initialState = {
  wishlistItems: [],
};

function WishlistReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_CONSTANTS.WISHLIST_ADD_ITEM:
      return {
        wishlistItems: [...state.wishlistItems, action.payload],
      };

    default:
      return state;
  }
}

export default WishlistReducer;
