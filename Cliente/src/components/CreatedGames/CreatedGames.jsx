import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterCreated, refreshPage } from "../../redux/Actions/actions";
import styles from "./CreatedGames.module.css";
export default function CreatedGames() {
  const dispatch = useDispatch();
  const [button, setButton] = useState(false);

  const created = (e) => {
    e.preventDefault();
    if (e.target.value === "api") {
      setButton(false);
    }
    dispatch(FilterCreated(e.target.value));
    dispatch(refreshPage());
  };

  const api = (e) => {
    e.preventDefault();
    if (e.target.value === "creados") {
      setButton(true);
    }
    dispatch(FilterCreated(e.target.value));
    dispatch(refreshPage());
  };

  return (
    <div>
      {button === false ? (
        <button className={styles.create} value="creados" onClick={api}>
          Creados
        </button>
      ) : (
        <button className={styles.create} value="api" onClick={created}>
          API
        </button>
      )}
    </div>
  );
}
