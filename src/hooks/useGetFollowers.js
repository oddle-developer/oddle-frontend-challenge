import { useEffect } from "react";
import { fetchFollowers } from "../redux/actions/followersActions";

import { useDispatch } from "react-redux";
const useGetFollowers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollowers());
  }, [dispatch]);
};

export default useGetFollowers;
