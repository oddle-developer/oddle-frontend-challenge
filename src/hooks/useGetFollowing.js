import { useEffect } from "react";
import { fetchFollowing } from "../redux/actions/followingActions";

import { useDispatch } from "react-redux";
const useGetFollowing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollowing());
  }, [dispatch]);
};

export default useGetFollowing;
