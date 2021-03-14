import React from "react";
import { connect } from "react-redux";
import { setSearchTerm } from "../../redux/actions/searchActions";
import { clone, isEmpty } from "lodash";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const trimEmpty = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      setSearchTerm(value);
    } else {
      if (searchTerm !== "") {
        console.log("the value is zero, reset!!", searchTerm);
        setSearchTerm("");
      }
    }
  };
  return (
    <>
      <label htmlFor="basic-url">Search by login name :</label>
      <div className="input-group">
        <span className="input-group-addon" id="basic-addon3">
          https://api.github.com/users/
        </span>
        <input
          onChange={trimEmpty}
          value={searchTerm}
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ searchTerm }) => ({
  searchTerm,
});

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
