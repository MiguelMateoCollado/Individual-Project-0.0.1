/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./pagination.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Pagination({ gamePerPage, allGames, pagination }) {
  const [width, setWidth] = useState(window.innerWidth);
  const currentPage = useSelector((state) => state.currentPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allGames / gamePerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(width)
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    pageNumbers.length === 0 ? setVisible(true) : setVisible(false);
  }, [pageNumbers]);
  return (
    <div  className={styles.container}>
      <nav>
        <ul className={styles.navbar}>
          <li hidden={visible}>
            {currentPage - 1 < 1 ? (
              <span className={styles.span}> &laquo; </span>
            ) : (
              <a
                className={styles.item}
                onClick={() => pagination(currentPage - 1)}
              >
                &laquo;
              </a>
            )}
          </li>
          { width !== 360 && pageNumbers?.map((number, index) => (
            <li key={index}>
              <a
                className={
                  currentPage === index + 1 ? styles.color : styles.item
                }
                onClick={() => pagination(number)}
              >
                {number}
              </a>
            </li>
          ))}
          <li hidden={visible}>
            {currentPage === pageNumbers.length ? (
              <span className={styles.span}> &raquo; </span>
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
