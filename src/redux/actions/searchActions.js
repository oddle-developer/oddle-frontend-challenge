import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";
import { mockUserResponse } from "../../utils/utilFns";

const setSearchTerm = (term) => {
  return {
    type: types.SET_SEARCH_TERM,
    term,
  };
};

const fetchAUser = () => {
  return async (dispatch, getState) => {
    const { searchTerm } = getState();
    dispatch({ type: types.FETCH_USER_PENDING });
    dispatch({ type: types.CLEAR_USER });
    try {
      if (searchTerm === "") {
        console.log("The search is an empty string what to do ? :", searchTerm);
        dispatch({ type: types.FETCH_USER_SUCCESS });
      } else {
        //const res = await axios.get(githubUserUrl + `${searchTerm}`);

        const res = await mockUserResponse();
        console.log("The search term to fetch is :", res);

        const { data: user } = res;
        dispatch({ type: types.FETCH_USER_SUCCESS });
        dispatch({ type: types.SET_SEARCH_USER, user });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.FETCH_USER_FAILED, err: message });
    }
  };
};

export { setSearchTerm, fetchAUser };
