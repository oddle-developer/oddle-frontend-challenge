import React from "react";
import { useParams } from "react-router-dom";
import PaginatorList from "../Paginator/PaginatorList";
import useGetRepos from "../../hooks/useGetRepos";
import { connect } from "react-redux";
import LoadingComponent from "../Loading/LoadingComponent";
const Repos = ({ repos, loading }) => {
  let { username } = useParams();
  useGetRepos();
  return (
    <>
      <h3 className="text-primary mb-3">Viewing {username}&apos;s repos :</h3>
      {loading && <LoadingComponent />}
      {repos.length > 0 && <PaginatorList use="repos" lists={repos} />}
    </>
  );
};

const mapStateToProps = ({ repos, loading }) => ({
  loading,
  repos,
});

export default connect(mapStateToProps)(Repos);
