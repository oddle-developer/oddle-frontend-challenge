import React from "react";
import { useParams } from "react-router-dom";
import PaginatorList from "../Paginator/PaginatorList";
import useGetFollowing from "../../hooks/useGetFollowing";
import { connect } from "react-redux";
import LoadingComponent from "../Loading/LoadingComponent";
const Following = ({ following, loading }) => {
  let { username } = useParams();
  useGetFollowing();
  return (
    <>
      <h3 className="text-primary mb-3">
        Viewing {username}&apos;s following :
      </h3>
      {loading && <LoadingComponent />}
      {following.length > 0 && (
        <PaginatorList use="following" lists={following} />
      )}
    </>
  );
};

const mapStateToProps = ({ following, loading }) => ({
  loading,
  following,
});

export default connect(mapStateToProps)(Following);
