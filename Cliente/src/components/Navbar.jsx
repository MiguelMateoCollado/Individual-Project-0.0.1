import FilterGenres from "./FilterGenres/FilterGenres";
import InputSearch from "./InputSearch/InputSearch";
import FilterRating from "./FilterRating/SortByRating";
import FilterAlfabetic from "./FilterAlfabetic/FilterAlfabetic";
import CreatedGames from "./CreatedGames/CreatedGames";
import CreatedLink from "./CreateLink/CreateLink"
import { Grid } from "@mui/material";
function Navbar() {
  return (
    <div>
      <Grid container spacing={1} >
        <Grid  >
          <InputSearch />
        </Grid>
        <Grid  >
          <FilterGenres />
        </Grid>
        <Grid  >
          <FilterRating />
        </Grid>
        <Grid  >
          <FilterAlfabetic />
        </Grid>
        <Grid >
          <CreatedGames />
        </Grid>
        <Grid  >
          <CreatedLink/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
