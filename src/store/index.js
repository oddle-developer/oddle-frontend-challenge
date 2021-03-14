import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers";

const initialState = {};
const logger = createLogger();
const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
