import styles from './Pagination.module.css';

type PaginationProps = {
    currentPage: number;
    count: number;
    pagesCount: number;
    setPagination: Function;
}

export const Pagination = ({
  currentPage, count, pagesCount, setPagination,
}: PaginationProps) => {
  const pages = [];

  const updatePagination = (e: any) => {
    const newPage = e.target.innerText;
    setPagination(newPage);
  };

  for (let i = 1; i <= pagesCount; i += 1) {
    if (i === currentPage) {
      pages.push(<div className={styles.active} key={i}>{i}</div>);
    } else {
      pages.push(<div key={i} onClick={updatePagination}>{i}</div>);
    }
  }

  return (
    <div className={styles.paginationContainer}>
      <div>
        all:
        {count}
      </div>
      <div className={styles.pagination}>
        {pages}
      </div>
    </div>
  );
};
