
// products constants
import * as PRODUCTS_CONSTANTS from "./constants";

// products reducer
const initState = {
  products: [],
  loading: false,
  error: null,
};

// this reducer for fetching products, so need: loading, error, products
function productsReducer(state = initState, action) {
  switch (action.type) {
    case PRODUCTS_CONSTANTS.PRODUCTS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case PRODUCTS_CONSTANTS.PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PRODUCTS_CONSTANTS.PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };

    default:
      return state;
  }
}

export default productsReducer;
