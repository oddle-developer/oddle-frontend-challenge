import { useEffect } from "react";
import { fetchAUser } from "../redux/actions/searchActions";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const useGithubSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const debouncedSearch = useDebounce(searchTerm, 400);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAUser(history));
  }, [dispatch, debouncedSearch]);
};

export default useGithubSearch;
