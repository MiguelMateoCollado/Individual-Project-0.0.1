import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import styles from "./CardGame.module.css";
import Stack from "react-bootstrap/esm/Stack";
function CardGame({ genres, name, id, image }) {
  return (
    <Row>
      <Link to={`/${id}`}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.headerCard}>
              <CardMedia
                className={styles.img}
                component="img"
                image={image}
                alt="green iguana"
              />
            </div>
            <div className={styles.body_card}>
              <div className={styles.card_content}>
                <p
                  className={styles.name}
                  gutterBottom
                  variant="h6"
                  justifyContent="center"
                  component="div"
                >
                  {name}
                </p>
                <Row direction="horizontal" className="justify-content-center">
                  {genres.map((gen) => (
                    <Col lg="auto" key={gen} className={styles.genres}>
                      {gen + " | "}
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Row>
  );
}

export default CardGame;
