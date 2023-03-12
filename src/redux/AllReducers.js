import { combineReducers } from "redux";

// products reducer
import productsReducer from "./products/reducer";
// auth reducer
import authReducer from "./authUser/reducer";

const AllReducers = combineReducers({
  productsReducer,
  authReducer,
});

export default AllReducers;
