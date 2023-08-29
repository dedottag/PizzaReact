import styles from "./pagination.module.scss";
import ReactPaginate from "react-paginate";

const Pagination = ({ setCurrentPage }) => {
  return (
    <div className={styles.container}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={4}
        pageCount={3}
        renderOnZeroPageCount={null}
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
      />
    </div>
  );
};

export default Pagination;
