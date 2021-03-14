import { useEffect } from "react";
import { fetchAUser } from "../redux/actions/searchActions";
import useDebounce from "./useDebounce";
import { useDispatch, useSelector } from "react-redux";
const useGithubSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  const debouncedSearch = useDebounce(searchTerm, 400);

  useEffect(() => {
    dispatch(fetchAUser());
  }, [dispatch, debouncedSearch]);
};

export default useGithubSearch;
