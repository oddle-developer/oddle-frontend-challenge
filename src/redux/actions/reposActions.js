import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";

const fetchRepos = () => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.FETCH_USER_PENDING });
    try {
      //const res = await axios.get(githubUserUrl + `${searchTerm}`);
      const res = await axios.get(
        "http://jsonplaceholder.typicode.com/comments"
      );
      console.log("The search term to fetch is :", res);
      const { data: repos } = res;
      dispatch({ type: types.FETCH_USER_SUCCESS });
      dispatch({ type: types.SET_USER_REPOS, repos });
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.FETCH_USER_FAILED, err: message });
    }
  };
};

export { fetchRepos };
