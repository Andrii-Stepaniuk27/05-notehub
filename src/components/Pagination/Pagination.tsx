import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";
import css from "./Pagination.module.css";

type ModuleWithDefault<T> = { default: T };
const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<
    ComponentType<ReactPaginateProps>
  >
).default;

interface PaginationProps {
  pageCount: number;

  forcePage: number;

  onPageChange: (page: number) => void;
}

const Pagination = ({
  pageCount,
  onPageChange,
  forcePage,
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected + 1);
  };

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={forcePage - 1}
    />
  );
};

export default Pagination;
