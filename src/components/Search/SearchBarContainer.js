import React from "react";
import { connect } from "react-redux";
import useGithubSearch from "../../hooks/useGithubSearch";
import ErrrorComponent from "../Error/ErrorComponent";
import LoadingComponent from "../Loading/LoadingComponent";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchBarContainer = ({ loading, error }) => {
  useGithubSearch();
  console.log(
    "The loading state is :",
    "loading :",
    loading,
    "errror :",
    error
  );
  return (
    <>
      <SearchBar />
      {error && <ErrrorComponent />}
      {loading && <LoadingComponent />}
      {/* {githubUser && <SearchResults />} */}
    </>
  );
};

const mapStateToProps = ({ loading, error }) => ({
  loading,
  error,
});

export default connect(mapStateToProps)(SearchBarContainer);
