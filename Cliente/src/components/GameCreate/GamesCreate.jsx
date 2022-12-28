import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getPlatforms,
  createGame,
} from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import styles from "./GamesCreate.module.css";

export default function GamesCreate() {
  const dispatch = useDispatch();

  const genres = useSelector((state) => state.genres);
  const platforms = useSelector((state) => state.platforms);

  const [errors, setError] = useState({});

  const [button, setButton] = useState(false);

  const [input, setInput] = useState({
    name: "",
    description: "",
    rating: 0,
    image: "",
    date: "",
    genres: [],
    platforms: [],
  });

  let navigate = useNavigate();

  async function toHome() {
    navigate("/");
  }

  useEffect(() => {
    setButton(
      !(
        input.name &&
        input.date &&
        input.rating > 0 &&
        input.rating <= 5 &&
        input.genres.length > 0 &&
        input.platforms.length > 0
      )
    );
  }, [input, button]);
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);
  const validacion = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Se requiere ingresar un nombre";
    }

    if (!input.date) {
      errors.date = "Requiere ingresar una fecha";
    }

    if (input.platforms.length <= 0) {
      errors.platforms = "Debes ingresar almenos 1 plataforma";
    }

    if (input.genres.length <= 0) {
      errors.genres = "Debes ingresar al menos 1 genero";
    }

    if (input.genres.length > 6) {
      errors.genres = "Son demasiados genres de juego";
    }
    if (input.image !== "") {
      let validURL = /https?:\/\/[\w\-.]+\.\w{2,5}\/?\S*/;
      if (validURL.test(input.image) === false) {
        errors.image = "Ingresa una Url valida";
      }
    }
    if (input.image === "") {
      errors.image = "Ingresa una Url con la imagen";
      setInput({
        ...input,
        image: "",
      });
    }
    if (input.rating > 5) {
      errors.rating = "Es superior al margen de rating";
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createGame(input);
      await toHome();
    } catch (error) {
      alert(error.message);
      await toHome();
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validacion({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      genres: input.genres.includes(e.target.value)
        ? input.genres.filter((el) => el !== e.target.value)
        : [...input.genres, e.target.value],
    });
    setError(
      validacion({
        ...input,
        genres: input.genres.includes(e.target.value)
          ? input.genres.filter((el) => el !== e.target.value)
          : [...input.genres, e.target.value],
      })
    );
  };
  const handleCheckPlatforms = (e) => {
    setInput({
      ...input,
      platforms: input.platforms.includes(e.target.value)
        ? input.platforms.filter((plat) => plat !== e.target.value)
        : [...input.platforms, e.target.value],
    });
    setError(
      validacion({
        ...input,
        platforms: input.platforms.includes(e.target.value)
          ? input.platforms.filter((plat) => plat !== e.target.value)
          : [...input.platforms, e.target.value],
      })
    );
  };

  return (
    <div>
      {genres.length === 0 && platforms.length === 0 ? (
        <div className={styles.container}>
          <h1>Loading...</h1>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className={styles.container}>
            <div className={styles.item}>
              <h3>Insert Name</h3>
              <input
                type="text"
                placeholder="Insert Name"
                onChange={(e) => handleChange(e)}
                name="name"
                value={input.name}
                className={styles.input}
              />
              {<p className={styles.alert}>{errors.name}</p>}
            </div>
            <div className={styles.item}>
              <h3>Insert Image</h3>
              <input
                type="text"
                placeholder="Inserte URL..."
                onChange={(e) => handleChange(e)}
                name="image"
                value={input.image}
                className={styles.input}
              />
              {<p className={styles.alert}>{errors.image}</p>}
            </div>

            <div className={styles.item}>
              <h3>Insert Rating</h3>
              <input
                type="number"
                name="rating"
                min="0"
                max="5"
                onChange={(e) => handleChange(e)}
                className={styles.inputRating}
                value={input.rating}
              />
              {<p>{errors.rating}</p>}
            </div>
            <div className={styles.item}>
              <h3>Fecha</h3>
              <input
                type="date"
                name="date"
                value={input.date}
                className={styles.inputDate}
                onChange={(e) => handleChange(e)}
              />
              {<p className={styles.alert}>{errors.date}</p>}
            </div>
            <div className={styles.item}>
              <h3 className={styles.genres}>genres</h3>
              {genres?.map((gen) => {
                return (
                  <div className={styles.switcher}>
                    <label className={styles.switcherLabel} for={gen.name}>
                      {gen.name}
                    </label>
                    <input
                      onChange={(e) => handleCheck(e)}
                      className={styles.switcher}
                      type="checkbox"
                      value={gen.name}
                      id={gen.name}
                    />
                  </div>
                );
              })}
              {<p className={styles.alert}>{errors.genres}</p>}
            </div>
            <div className={styles.item}>
              <h3 className={styles.genres}>Plataformas</h3>
              {platforms.map((plat) => {
                return (
                  <div className={styles.switcher}>
                    <label className={styles.switcherLabel} for={plat.name}>
                      {plat.name}
                    </label>
                    <input
                      onChange={(e) => handleCheckPlatforms(e)}
                      className={styles.switcher}
                      type="checkbox"
                      value={plat.name}
                      id={plat.name}
                    />
                  </div>
                );
              })}
              {<p className={styles.alert}>{errors.platforms}</p>}
            </div>
            <div className={styles.item}>
              <button
                className={styles.botonSubmit}
                disabled={button}
                type="Submit"
              >
                Enviar Formulario
              </button>
              <Link className={styles.botonRetorna} to="/">
                Volver
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
