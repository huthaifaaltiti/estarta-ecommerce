import { combineReducers } from "redux";

// products reducer
import productsReducer from "./products/reducer";
// auth reducer
import authReducer from "./authUser/reducer";
// cart reducer
import cartReducer from "./cart/reducer";

const AllReducers = combineReducers({
  productsReducer,
  authReducer,
  cartReducer
});

export default AllReducers;
