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

    case CART_CONSTANTS.MIN_ITEM_FROM_CART:
      const elementFoundMin = state.cartItems.find(
        (cartItemMin) => action.payload.id === cartItemMin.id
      );

      if (elementFoundMin.quantity > 1) {
        state.cartItems.pop();
        return {
          cartItems: [
            ...state.cartItems,
            { ...elementFoundMin, quantity: action.payload.quantity - 1 },
          ],
        };
      }
      if (elementFoundMin.quantity === 1) {
        const resCartItems3 = state.cartItems.filter(
          (cartItem4) => cartItem4.id !== action.payload.id
        );

        return {
          cartItems: [...resCartItems3],
        };
      }

    case CART_CONSTANTS.CART_DELETE_ALL:
      return {
        cartItems: [],
      };

    default:
      return state;
  }
}

export default cartReducer;
