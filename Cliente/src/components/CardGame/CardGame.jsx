import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import styles from "./CardGame.module.css";
function CardGame({ genres, name, id, image }) {
  return (
    <Grid item xs={4}>
      <Link underline="none" color="primary"  href={`/${id}`}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.headerCard}>
              <CardMedia
                className={styles.img}
                component="img"
                height="180"
                image={image}
                alt="green iguana"
              />
            </div>
            <div className={styles.body_card}>
              <div className={styles.card_content}>
                <Typography
                  className={styles.name}
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
                      <Typography className={styles.genres} variant="subtitle1" color="text-secondary">
                        {gen + " | "}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
}

export default CardGame;
