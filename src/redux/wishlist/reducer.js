// wishlist constants
import * as WISHLIST_CONSTANTS from "./constants";

// redux
// import { useSelector } from "react-redux";

// Wishlist reducer
const initialState = {
  wishlistItems: [],
};

function WishlistReducer(state = initialState, action) {
  // const { cartItems } = useSelector((state) => state.cartReducer);

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

    case WISHLIST_CONSTANTS.WISHLIST_REMOVE_ITEM:
      const filterItems = state.wishlistItems.filter(
        (wishlistItem) => action.payload.id !== wishlistItem.id
      );

      console.log(filterItems);

      return {
        wishlistItems: filterItems,
      };

    case WISHLIST_CONSTANTS.WISHLIST_DELETE_ALL:
      return { wishlistItems: [] };
    default:
      return state;
  }
}

export default WishlistReducer;
