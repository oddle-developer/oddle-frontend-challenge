import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  searchTerm: searchReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
