import type { ComponentType } from 'react';
import * as ReactPaginateImport from 'react-paginate';
import type { ReactPaginateProps } from 'react-paginate';
import css from './Pagination.module.css';

const reactPaginateDefault = (ReactPaginateImport as unknown as { default?: unknown }).default;
const ReactPaginate = (
  typeof reactPaginateDefault === 'function'
    ? reactPaginateDefault
    : (reactPaginateDefault as any)?.default ||
      (ReactPaginateImport as any).ReactPaginate ||
      (ReactPaginateImport as any)
) as ComponentType<ReactPaginateProps>;

interface PaginationProps {
  pageCount: number;
  onPageChange: (selected: number) => void;
  forcePage: number;
}

const Pagination = ({ pageCount, onPageChange, forcePage }: PaginationProps) => {
  return (
    <ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(data: { selected: number }) => onPageChange(data.selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      forcePage={forcePage - 1}
    />
  );
};

export default Pagination;