import React from "react";
import { connect } from "react-redux";
import useGithubSearch from "../../hooks/useGithubSearch";
import ErrrorComponent from "../Error/ErrorComponent";
import LoadingComponent from "../Loading/LoadingComponent";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchBarContainer = ({ loading, error, user }) => {
  useGithubSearch();
  return (
    <>
      <SearchBar />
      {error && <ErrrorComponent />}
      {loading && <LoadingComponent />}
      {"login" in user && <SearchResults />}
    </>
  );
};

const mapStateToProps = ({ user, loading, error }) => ({
  loading,
  error,
  user,
});

export default connect(mapStateToProps)(SearchBarContainer);
