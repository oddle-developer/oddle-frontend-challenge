import React from "react";
import { connect } from "react-redux";
import useGithubSearch from "../../hooks/useGithubSearch";
import ErrrorComponent from "../Error/ErrorComponent";
import LoadingComponent from "../Loading/LoadingComponent";
import SearchBar from "./SearchBar";

const SearchBarContainer = ({ loading, error }) => {
  useGithubSearch();
  return (
    <>
      <SearchBar />
      {error && <ErrrorComponent />}
      {loading && <LoadingComponent />}
    </>
  );
};

const mapStateToProps = ({ loading, error }) => ({
  loading,
  error,
});

export default connect(mapStateToProps)(SearchBarContainer);
