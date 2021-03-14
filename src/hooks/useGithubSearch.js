import { useEffect } from "react";
import { fetchAUser } from "../redux/actions/searchActions";
import { useDispatch, useSelector } from "react-redux";
const useGithubSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);
  useEffect(() => {
    dispatch(fetchAUser());
  }, [dispatch, searchTerm]);
};

export default useGithubSearch;
