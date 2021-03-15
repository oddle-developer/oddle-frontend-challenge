import axios from "axios";
import * as types from "../constants/actionTypes";
import { githubUserUrl } from "../../config/appConfig";
import { mockUpdateUserResponse } from "../../utils/utilFns";

export const updateUser = (username) => {
  return async (dispatch, getState) => {
    const { user } = getState();

    try {
      if (user.login !== username) {
        dispatch({ type: types.LOADING_PENDING });

        //const res = await axios.get(githubUserUrl + `${searchTerm}`);

        const res = await mockUpdateUserResponse();
        console.log("The search term to fetch is :", res);

        const { data: user } = res;
        dispatch({ type: types.LOADING_SUCCESS });
        dispatch({ type: types.SET_SEARCH_USER, user });
      }
    } catch (error) {
      const { message } = error;
      dispatch({ type: types.LOADING_FAILED, err: message });
    }
  };
};
