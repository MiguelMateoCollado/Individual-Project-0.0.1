import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./CardGame.css";
import { Link } from "react-router-dom";

function CardGame({ genres, name, id, image }) {
  return (
    <Grid item xs={4}>
      <Link to={`/${id}`}>
        <Card sx={{ width: 350, height: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                justifyContent="center"
                component="div"
              >
                {name}
              </Typography>
              <Grid container spacing={0.5} justifyContent="center">
                {genres.map((gen) => (
                  <Grid key={gen} item xs="auto">
                    <Typography variant="h6" color="text-secondary">
                      {gen + " | "}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
}

export default CardGame;
