import FilterGenres from "../FilterGenres/FilterGenres";
import InputSearch from "../InputSearch/InputSearch";
import FilterRating from "../FilterRating/SortByRating";
import FilterAlfabetic from "../FilterAlfabetic/FilterAlfabetic";
import CreatedGames from "../CreatedGames/CreatedGames";
import CreatedLink from "../CreateLink/CreateLink";
import styles from "./Navbar.module.css"
import { Grid } from "@mui/material";
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
    <div className={styles.navbar}>
      <Grid container >
        <Grid>
          <InputSearch />
        </Grid>
        <Grid>
          <FilterGenres estado={activite} css={styles.boton} />
        </Grid>
        <Grid>
          <FilterRating estado={activite} css={styles.boton}/>
        </Grid>
        <Grid>
          <FilterAlfabetic estado={activite} css={styles.boton}/>
        </Grid>
        <Grid>
          <CreatedGames css={styles.boton} />
        </Grid>
        <Grid sx={{ marginTop: 1.5 }} >
          <CreatedLink css={styles.boton}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
