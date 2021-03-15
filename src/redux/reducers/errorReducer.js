import { LOADING_FAILED, LOADING_SUCCESS } from "../constants/actionTypes";
const INITIAL_STATE = false;
const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_SUCCESS:
      return false;
    case LOADING_FAILED:
      return true;
    default:
      return state;
  }
};

export default errorReducer;
