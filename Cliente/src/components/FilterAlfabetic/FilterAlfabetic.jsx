import React, { useState } from "react";
import styles from "./buttons.module.css";
import {
  sortReverse,
  refreshPage,
  sortGames,
} from "../../redux/Actions/actions";
import { useDispatch } from "react-redux";


export default function FilterAlfabetic({ estado, css }) {
  const [button, setButton] = useState(false);
  const dispatch = useDispatch();

  const SortGames1 = () => {
    setButton(true);
    dispatch(sortReverse());
    dispatch(refreshPage());
  };

  const SortGames2 = () => {
    setButton(false);
    dispatch(sortGames());
    dispatch(refreshPage());
  };

  return (
    <div>
      {button === true ? (
        <button
          className={css}
          value="initial"
          disabled={estado}
          onClick={SortGames2}
        >
          A-Z
        </button>
      ) : (
        <button
          className={css}
          disabled={estado}
          value="reverse"
          onClick={SortGames1}
        >
          Z-A
        </button>
      )}
    </div>
  );
}
