import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./CardGame.css";
import Link from "@mui/material/Link";

function CardGame({ genres, name, id, image }) {
  return (
    <Grid item xs={3.3}>
      <CardActionArea>
        <Link underline="none" href={`/${id}`}>
          <Card sx={{ width: 300, height: 300 ,marginBottom: 2 }} >
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                justifyContent="center"
                component="div"
              >
                {name}
              </Typography>
              <Grid container justifyContent="center">
                {genres.map((gen) => (
                  <Grid key={gen} item xs="auto">
                    <Typography variant="subtitle1" color="text-secondary">
                      {gen + " | "}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Link>
      </CardActionArea>
    </Grid>
  );
}

export default CardGame;
