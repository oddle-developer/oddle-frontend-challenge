import * as types from "../constants/actionTypes";

const searchReducer = (state = "", action) => {
  switch (action.type) {
    case types.SET_SEARCH_TERM:
      return action.term;
    default:
      return state;
  }
};

export default searchReducer;
