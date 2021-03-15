import {
  SET_ITEMS_PER_PAGE,
  SET_CURRENT_PAGE,
  CLEAR_PAGINATION,
} from "../constants/actionTypes";
const INITIAL_STATE = { itemsPerPage: 10, currentPage: 1 };

const reposOnAdd = (repos) => {
  console.log("The added user is :");
  let updatedRecommendationItems = repos;
  return updatedRecommendationItems;
};
const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE:
      return reposOnAdd(action.repos);
    case SET_CURRENT_PAGE:
      return reposOnAdd(action.repos);
    case CLEAR_PAGINATION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default paginationReducer;
