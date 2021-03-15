import { SET_CURRENT_PAGE, CLEAR_PAGINATION } from "../constants/actionTypes";
const INITIAL_STATE = { itemsPerPage: 10, currentPage: 1 };

const currentPageSet = (state, number) => {
  const newState = { ...state, currentPage: number };
  return newState;
};
const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return currentPageSet(state, action.number);
    case CLEAR_PAGINATION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default paginationReducer;
