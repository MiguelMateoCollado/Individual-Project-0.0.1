import FilterGenres from "../FilterGenres/FilterGenres";
import InputSearch from "../InputSearch/InputSearch";
import FilterRating from "../FilterRating/SortByRating";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import CreatedGames from "../CreatedGames/CreatedGames";
import CreatedLink from "../CreateLink/CreateLink";
import Stack from "react-bootstrap/Stack";
import styles from "./Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const allGames = useSelector((state) => state.games);
  const [activite, setActivate] = useState(false);

  useEffect(
    () => (allGames.length === 0 ? setActivate(true) : setActivate(false)),
    [allGames, setActivate]
  );
  return (
    <div>
      <Stack direction="horizontal" gap={4}>
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
