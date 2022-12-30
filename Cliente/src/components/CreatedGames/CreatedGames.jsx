import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterCreated, refreshPage } from "../../redux/Actions/actions";
import styles from "./CreatedGames.module.css";
export default function CreatedGames({ css }) {
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
        <button className={css} value="creados" onClick={api}>
          Created
        </button>
      ) : (
        <button className={css} value="api" onClick={created}>
          API
        </button>
      )}
    </div>
  );
}
