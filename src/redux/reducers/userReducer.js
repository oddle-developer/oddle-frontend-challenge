import { SET_SEARCH_USER, CLEAR_USER } from "../constants/actionTypes";
const INITIAL_STATE = {};

const userOnAdd = (user) => {
  console.log("The added user is :");
  let updatedRecommendationItems = user;
  return updatedRecommendationItems;
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_USER:
      return userOnAdd(action.user);
    case CLEAR_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
