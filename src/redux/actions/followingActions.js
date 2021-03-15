import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";

const fetchFollowing = () => {
  return async (dispatch, getState) => {
    const { user } = getState();
    dispatch({ type: types.LOADING_PENDING });
    try {
      const res = await axios.get(
        githubUserUrl + `${user.login}` + "/following"
      );

      const { data: following } = res;
      dispatch({ type: types.LOADING_SUCCESS });
      dispatch({ type: types.CLEAR_PAGINATION });
      dispatch({ type: types.SET_USER_FOLLOWING, following });
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};

export { fetchFollowing };
