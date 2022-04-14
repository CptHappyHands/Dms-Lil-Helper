import { createStore, compose, applyMiddleware } from "redux";
import table from "./table";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
  table,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
