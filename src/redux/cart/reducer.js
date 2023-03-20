// cart constants
import * as CART_CONSTANTS from "./constants";

// cart reducer
const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      return {
        cartItems: [...state.cartItems, action.payload],
      };

    default:
      return state;
  }
}

export default cartReducer;
