import { SET_USER_REPOS, CLEAR_USER_REPOS } from "../constants/actionTypes";
const INITIAL_STATE = [];

const reposOnAdd = (repos) => {
  console.log("The added user is :");
  let updatedRecommendationItems = repos;
  return updatedRecommendationItems;
};
const repoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_REPOS:
      return reposOnAdd(action.repos);
    case CLEAR_USER_REPOS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default repoReducer;
