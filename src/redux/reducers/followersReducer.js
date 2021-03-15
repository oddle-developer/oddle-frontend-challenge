import {
  SET_USER_FOLLOWERS,
  CLEAR_USER_FOLLOWERS,
} from "../constants/actionTypes";
const INITIAL_STATE = [];

const reposOnAdd = (followers) => {
  let updatedFollowers = followers;
  return updatedFollowers;
};
const followersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_FOLLOWERS:
      return reposOnAdd(action.followers);
    case CLEAR_USER_FOLLOWERS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default followersReducer;
