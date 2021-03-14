import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  searchTerm: searchReducer,
  error: errorReducer,
  loading: loadingReducer,
  user: userReducer,
});

export default rootReducer;
