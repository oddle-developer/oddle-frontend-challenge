import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";
import { mockReposResponse } from "../../utils/utilFns";

const fetchRepos = () => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.LOADING_PENDING });
    try {
      //const res = await axios.get(githubUserUrl + `${searchTerm}`);
      // const res = await axios.get(
      //   "http://jsonplaceholder.typicode.com/comments"
      // );
      const res = await mockReposResponse();
      console.log("The search term to fetch is :", res);
      const { data: repos } = res;
      dispatch({ type: types.LOADING_SUCCESS });
      dispatch({ type: types.SET_USER_REPOS, repos });
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};

export { fetchRepos };
