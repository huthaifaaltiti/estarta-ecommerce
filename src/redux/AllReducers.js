import { combineReducers } from "redux";

// products reducer
import productsReducer from "./products/reducer";

const AllReducers = combineReducers({
  productsReducer,
});

export default AllReducers;
