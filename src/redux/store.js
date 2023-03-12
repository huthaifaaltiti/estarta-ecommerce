// redux
import { createStore, applyMiddleware, compose } from "redux";
// all reducers
import AllReducers from "./AllReducers";

import thunk from "redux-thunk";

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// pass reducers to store
const store = createStore(AllReducers, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
