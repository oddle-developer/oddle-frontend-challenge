import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";

const setSearchTerm = (term) => {
  return {
    type: types.SET_SEARCH_TERM,
    term,
  };
};

const fetchAUser = (history) => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.LOADING_PENDING });
    dispatch({ type: types.CLEAR_USER });
    try {
      if (searchTerm === "") {
        console.log("The search is an empty string what to do ? :", searchTerm);
        dispatch({ type: types.LOADING_SUCCESS });
      } else {
        const res = await axios.get(githubUserUrl + `${searchTerm}`);

        const { data: user } = res;
        dispatch({ type: types.LOADING_SUCCESS });
        dispatch({ type: types.SET_SEARCH_USER, user });
        history.push(`/user/${user.login}`);
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};

export { setSearchTerm, fetchAUser };
