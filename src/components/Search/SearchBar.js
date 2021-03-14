import React from "react";
import { clone, isEmpty } from "lodash";

const SearchBar = () => {
  const trimEmpty = (event) => {
    const value = clone(event.target.value);
    if (!isEmpty(value.trim())) {
      return setTerm(value);
    }
  };
  return (
    <>
      <label for="basic-url">Search by login name :</label>
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon3">
          https://example.com/users/
        </span>
        <input
          onChange={trimEmpty}
          type="text"
          class="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
        />
      </div>
    </>
  );
};

export default SearchBar;
