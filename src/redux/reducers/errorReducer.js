import {
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
} from "../constants/actionTypes";
const INITIAL_STATE = false;
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return false;
    case FETCH_USER_FAILED:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
