import { useEffect } from "react";
import { fetchRepos } from "../redux/actions/reposActions";

import { useDispatch } from "react-redux";
const useGetRepos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos());
  }, [dispatch]);
};

export default useGetRepos;
