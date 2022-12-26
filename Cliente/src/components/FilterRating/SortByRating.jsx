import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SortRating,
  refreshPage,
  SortRatingLow,
} from "../../redux/Actions/actions";
import styles from "./SortByRating.module.css";
export default function SortByRating({ estado }) {
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();

  const sortHigh = () => {
    setButton(true);
    dispatch(SortRating());
    dispatch(refreshPage());
  };

  const sortLow = () => {
    setButton(false);
    dispatch(SortRatingLow());
    dispatch(refreshPage());
  };
  return (
    <div>
      {button === false ? (
        <button className={styles.sort} disabled={estado} onClick={sortHigh}>
          Rating ↑
        </button>
      ) : (
        <button className={styles.sort} value="lower" disabled={estado} onClick={sortLow}>
          Rating ↓
        </button>
      )}
    </div>
  );
}
