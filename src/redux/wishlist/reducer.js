// wishlist constants
import * as WISHLIST_CONSTANTS from "./constants";

// Wishlist reducer
const initialState = {
  wishlistItems: [],
};

function WishlistReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST_CONSTANTS.WISHLIST_ADD_ITEM:
      const isItemFound = state.wishlistItems.find(
        (wishlistItem) => wishlistItem.id === action.payload.id
      );

      if (isItemFound) {
        return {
          wishlistItems: [...state.wishlistItems],
        };
      } else {
        return {
          wishlistItems: [...state.wishlistItems, action.payload],
        };
      }

    default:
      return state;
  }
}

export default WishlistReducer;
