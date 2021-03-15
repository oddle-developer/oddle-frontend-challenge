import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../redux/actions/paginationActions";

const Paginator = ({ itemsPerPage, totalList, setCurrentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalList / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (number) =>
    console.log("setting number : ", number) || setCurrentPage(number);

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        {pageNumbers.map((number) => (
          <li key={number} class="page-item">
            <button class="page-link" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (number) => dispatch(setCurrentPage(number)),
});

export default connect(null, mapDispatchToProps)(Paginator);
