// redux
import { createStore, applyMiddleware, compose } from "redux";
// redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// all reducers
import AllReducers from "./AllReducers";

import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// pass reducers to store
export const store = createStore(
  // AllReducers,
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
