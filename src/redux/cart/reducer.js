// cart constants
import * as CART_CONSTANTS from "./constants";

// cart reducer
const initialState = {
  cartItems: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case CART_CONSTANTS.ADD_TO_CART:
      const elementFound = state.cartItems.find(
        (cartItem) => action.payload.id === cartItem.id
      );

      if (!elementFound) {
        return {
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        state.cartItems.pop();

        return {
          cartItems: [
            ...state.cartItems,
            { ...elementFound, quantity: elementFound.quantity + 1 },
          ],
        };
      }

    default:
      return state;
  }
}

export default cartReducer;
