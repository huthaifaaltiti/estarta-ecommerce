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
        const arr2 = state.cartItems.filter(
          (cartItem2) => action.payload.id !== cartItem2.id
        );

        return {
          cartItems: [
            ...arr2,
            { ...elementFound, quantity: elementFound.quantity + 1 },
          ],
        };
      }

    case CART_CONSTANTS.REMOVE_FROM_CART:
      const resCartItems = state.cartItems.filter(
        (cartItem3) => cartItem3.id !== action.payload.id
      );

      return {
        cartItems: [...resCartItems],
      };

    default:
      return state;
  }
}

export default cartReducer;
