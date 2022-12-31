import FilterGenres from "../FilterGenres/FilterGenres";
import InputSearch from "../InputSearch/InputSearch";
import FilterRating from "../FilterRating/SortByRating";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import CreatedGames from "../CreatedGames/CreatedGames";
import CreatedLink from "../CreateLink/CreateLink";
import Stack from "react-bootstrap/Stack";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const allGames = useSelector((state) => state.games);
  const [activite, setActivate] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(
    () => (allGames.length === 0 ? setActivate(true) : setActivate(false)),
    [allGames, setActivate]
  );
  return (
    <div>
      <Stack
        direction="horizontal"
        className={
          width === 360
            ? "vstack col-sm-12  mb-lg-3 mt-lg-2 text-center justify-content-center align-items-center"
            : "col-sm-12  mb-lg-3 mt-lg-2 text-center justify-content-center align-items-center"
        }
        gap={4}
      >
        <InputSearch />
        <FilterGenres estado={activite} css={styles.boton} />
        <FilterRating estado={activite} css={styles.boton} />
        <FilterAlfabetic estado={activite} css={styles.boton} />
        <CreatedGames css={styles.boton} />
        <CreatedLink css={styles.boton} />
      </Stack>
    </div>
  );
}

export default Navbar;
