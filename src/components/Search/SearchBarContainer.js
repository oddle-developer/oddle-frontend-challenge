import React from "react";

import useSearchTerm from "../../hooks/useSearchTerm";
import ErrrorComponent from "../Error/ErrorComponent";
import LoadingComponent from "../Loading/LoadingComponent";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchBarContainer = ({ githubUsers, loading, error }) => {
  return (
    <>
      <SearchBar />
      {error && <ErrrorComponent />}
      {loading && <LoadingComponent />}
      {githubUsers && <SearchResults />}
    </>
  );
};

const mapStateToProps = ({ cartItems, loading, error }) => ({
  cartItems,
  loading,
  error,
});

export default SearchBarContainer;
