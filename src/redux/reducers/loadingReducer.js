import {
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
  FETCH_USER_PENDING,
} from "../constants/actionTypes";
const INITIAL_STATE = false;

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return true;
    case FETCH_USER_FAILED:
    case FETCH_USER_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
