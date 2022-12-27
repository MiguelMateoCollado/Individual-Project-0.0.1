import FilterGenres from "./FilterGenres/FilterGenres";
import InputSearch from "./InputSearch/InputSearch";
import FilterRating from "./FilterRating/SortByRating";
import FilterAlfabetic from "./FilterAlfabetic/FilterAlfabetic";
import CreatedGames from "./CreatedGames/CreatedGames";
import CreatedLink from "./CreateLink/CreateLink";
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
    <div>
      <Grid container>
        <Grid>
          <InputSearch />
        </Grid>
        <Grid>
          <FilterGenres estado={activite} />
        </Grid>
        <Grid>
          <FilterRating estado={activite} />
        </Grid>
        <Grid>
          <FilterAlfabetic estado={activite} />
        </Grid>
        <Grid>
          <CreatedGames />
        </Grid>
        <Grid sx={{ marginTop: 1.5 }}>
          <CreatedLink />
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
