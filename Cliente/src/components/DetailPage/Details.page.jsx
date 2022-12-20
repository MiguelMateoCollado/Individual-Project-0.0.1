import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/Actions/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./GamesDetails.module.css";
import { Link } from "react-router-dom";

function Details() {

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);
  const myGame = useSelector((state) => state.detail);
  console.log(myGame);
  return (
    <div>
      <div className={styles.container}>
        <h1>Pagina detalles</h1>
        <div>
          <img
            src={myGame.image}
            width="700"
            height="500"
            className={styles.image}
            alt=""
          />
        </div>
        <h1>{myGame.name}</h1>
        <h2>Rating:{myGame.rating}</h2>
        <h2>Date:{myGame.date}</h2>
        <h2>Generos</h2>
        <h3>
          {!myGame.createdInDb
            ? myGame.generos + " "
            : myGame.generos.map((gen) => gen.name + " ")}
        </h3>
        <h2>Plataformas</h2>
        <h3>
          {!myGame.createdInDb
            ? myGame.platforms + " "
            : myGame.platforms.map((plat) => plat + " ")}
        </h3>
        <Link  to="/">
          <button className={styles.alfa}>volver</button>
        </Link>
      </div>
    </div>
  );
}
export default Details;
