import React from "react";
import { useParams } from "react-router-dom";
import PaginatorList from "../Paginator/PaginatorList";
import useGetFollowers from "../../hooks/useGetFollowers";
import { connect } from "react-redux";
import LoadingComponent from "../Loading/LoadingComponent";
const Followers = ({ followers, loading }) => {
  let { username } = useParams();
  useGetFollowers();
  return (
    <>
      <h3 className="text-primary mb-3">
        Viewing {username}&apos;s followers :
      </h3>
      {loading && <LoadingComponent />}
      {followers.length > 0 && (
        <PaginatorList use="followers" lists={followers} />
      )}
    </>
  );
};

const mapStateToProps = ({ followers, loading }) => ({
  loading,
  followers,
});

export default connect(mapStateToProps)(Followers);
