import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import useGetRepos from "../../hooks/useGetRepos";
import Paginator from "./Paginator";
const PaginatorList = ({ lists, pagination }) => {
  useGetRepos();
  let { topicId } = useParams();
  const { currentPage, itemsPerPage } = pagination;

  // Paginator Logic
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentListSlice = lists.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <h3 className="text-primary mb-3">Viewing : {topicId} </h3>

      <ul className="list-group mb-4">
        {currentListSlice.map((item) => (
          <li key={item.id} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>
      <Paginator />
    </>
  );
};

const mapStateToProps = ({ repos, loading, pagination }) => ({
  loading,
  lists: null || repos,
  pagination,
});

export default connect(mapStateToProps)(PaginatorList);
