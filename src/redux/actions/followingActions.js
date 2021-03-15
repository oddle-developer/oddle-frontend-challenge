import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";
import { mockFollowersResponse } from "../../utils/utilFns";
const fetchFollowing = () => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.LOADING_PENDING });
    try {
      //const res = await axios.get(githubUserUrl + `${searchTerm}`);
      //const res = await axios.get("http://jsonplaceholder.typicode.com/photos");
      const res = await mockFollowersResponse();
      console.log("The Following result is same as followers for now :", res);
      const { data: following } = res;
      dispatch({ type: types.LOADING_SUCCESS });
      dispatch({ type: types.SET_USER_FOLLOWING, following });
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};

export { fetchFollowing };
