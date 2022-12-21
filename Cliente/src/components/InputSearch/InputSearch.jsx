import React from "react";
import styles from "./InputSearch.module.css";
import { searchGame, refreshPage } from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";
export default function InputSearch() {
  let dispatch = useDispatch();
  const takeName = (e) => {
    dispatch(refreshPage())
    dispatch(searchGame(e.target.value));
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="input"
        name="name"
        onChange={(e) => takeName(e)}
        id="name"
        required
      />
      <label>
        <span>S</span>
        <span>e</span>
        <span>a</span>
        <span>r</span>
        <span>c</span>
        <span>h</span>
      </label>
    </div>
  );
}
