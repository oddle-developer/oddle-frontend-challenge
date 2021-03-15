import React from "react";
import { connect } from "react-redux";
import { setCurrentPage } from "../../redux/actions/paginationActions";

const Paginator = ({ setCurrentPage, pagination, list }) => {
  const { currentPage, itemsPerPage } = pagination;
  const maxListNumber = Math.ceil(list.length / itemsPerPage);
  const startListNumber = 1;

  const prevFn = () => {
    if (currentPage > startListNumber) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextFn = () => {
    if (currentPage < maxListNumber) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li key={"prev"} className="page-item">
          <button
            disabled={currentPage === startListNumber ? true : false}
            className="page-link"
            onClick={prevFn}
          >
            <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          </button>
        </li>
        <li key={"..."} className="page-item">
          <button className="page-link" disabled>
            ...{" "}
          </button>
        </li>

        <li key={"next"} className="page-item">
          <button
            disabled={currentPage === maxListNumber ? true : false}
            className="page-link"
            onClick={nextFn}
          >
            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ pagination }) => ({
  pagination,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentPage: (number) => dispatch(setCurrentPage(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
