import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_PENDING,
} from "../constants/actionTypes";
const INITIAL_STATE = false;

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_PENDING:
      return true;
    case LOADING_FAILED:
    case LOADING_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
