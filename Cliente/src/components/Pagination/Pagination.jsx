/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./pagination.module.css";
import { useSelector } from "react-redux";
export default function Pagination({ gamePerPage, allGames, pagination }) {
  const currentPage = useSelector((state) => state.currentPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allGames / gamePerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers.length);
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.navbar}>
          <li>
            {currentPage - 1 < 1 ? (
              <span> &laquo; </span>
            ) : (
              <a
                className={styles.item}
                onClick={() => pagination(currentPage - 1)}
              >
                &laquo;
              </a>
            )}
          </li>
          {pageNumbers?.map((number, index) => (
            <li key={index}>
              <a className={styles.item} onClick={() => pagination(number)}>
                {number}
              </a>
            </li>
          ))}
          <li>
            {currentPage + 1 > pageNumbers.length ? (
              <span> &raquo; </span>
            ) : (
              <a
                className={styles.item}
                onClick={() => pagination(currentPage + 1)}
              >
                &raquo;
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
