import { SET_CURRENT_PAGE, CLEAR_PAGINATION } from "../constants/actionTypes";

const setCurrentPage = (number) => {
  return {
    type: SET_CURRENT_PAGE,
    number,
  };
};

const clearPaginator = () => {
  return {
    type: CLEAR_PAGINATION,
  };
};

export { clearPaginator, setCurrentPage };
