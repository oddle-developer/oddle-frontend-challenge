import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";
import { mockFollowersResponse } from "../../utils/utilFns";
const fetchFollowers = () => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.LOADING_PENDING });
    try {
      //const res = await axios.get(githubUserUrl + `${searchTerm}`);
      //const res = await axios.get("http://jsonplaceholder.typicode.com/photos");
      const res = await mockFollowersResponse();
      console.log("The Followers result is :", res);
      const { data: followers } = res;
      dispatch({ type: types.LOADING_SUCCESS });
      dispatch({ type: types.SET_USER_FOLLOWERS, followers });
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};

export { fetchFollowers };
