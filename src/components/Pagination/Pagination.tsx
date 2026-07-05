import ReactPaginate from 'react-paginate';
import css from './Pagination.module.css';

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