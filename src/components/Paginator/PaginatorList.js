import React from "react";
import { connect } from "react-redux";
import Paginator from "./Paginator";
import PaginatorListItem from "./PaginatorListItem";

const PaginatorList = ({ lists, pagination, use }) => {
  const { currentPage, itemsPerPage } = pagination;
  // Paginator Logic
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentListSlice = lists.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <ul className="list-group mb-4">
        {currentListSlice.map((item) => (
          <PaginatorListItem key={item.id} use={use} item={item} />
        ))}
      </ul>
      <Paginator list={lists} />
    </>
  );
};

const mapStateToProps = ({ pagination }) => ({
  pagination,
});

export default connect(mapStateToProps)(PaginatorList);
