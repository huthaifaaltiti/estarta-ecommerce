// redux
import { combineReducers } from "redux";

// reducers
import productsReducer from "./products/reducer";
import authReducer from "./authUser/reducer";
import cartReducer from "./cart/reducer";
import WishlistReducer from "./wishlist/reducer";

const AllReducers = combineReducers({
  productsReducer,
  authReducer,
  cartReducer,
  WishlistReducer,
});

export default AllReducers;
