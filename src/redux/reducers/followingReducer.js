import {
  SET_USER_FOLLOWING,
  CLEAR_USER_FOLLOWING,
} from "../constants/actionTypes";
const INITIAL_STATE = [];

const reposOnAdd = (following) => {
  let updatedFollowing = following;
  return updatedFollowing;
};
const followingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_FOLLOWING:
      return reposOnAdd(action.following);
    case CLEAR_USER_FOLLOWING:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default followingReducer;
