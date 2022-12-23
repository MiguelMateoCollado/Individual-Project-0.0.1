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

    return errors;
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createGame(input);
      await toHome()
    } catch (error) {
      alert(error.message);
      await toHome()
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
      <div>
        <form className={styles.create} onSubmit={handleSubmit}>
          <div>
            <div>
              <div>
                <label htmlFor="">Name</label>
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
            </div>
            <div>
              <div>
                <label>Image</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Inserte URL..."
                  className={styles.inputImg}
                  value={input.image}
                  onChange={(e) => handleChange(e)}
                />
                {<p className={styles.alert}>{errors.image}</p>}
              </div>
              <label>Rating</label>
              <input
                type="number"
                name="rating"
                min="0"
                max="100"
                onChange={(e) => handleChange(e)}
                className={styles.inputRating}
                value={input.rating}
              />
              {<p>{errors.rating}</p>}
              <label>Fecha</label> <br />
              <input
                type="date"
                name="date"
                value={input.date}
                className={styles.inputDate}
                onChange={(e) => handleChange(e)}
              />
              {<p className={styles.alert}>{errors.date}</p>}
            </div>
          </div>
          <h3 className={styles.genres}>genres</h3>
          {genres?.map((gen) => {
            return (
              <div key={gen.id} className={styles.items}>
                <div>
                  <label>{gen.name}</label>
                  <input
                    onChange={(e) => handleCheck(e)}
                    type="checkbox"
                    className={styles.check}
                    name={gen.name}
                    value={gen.name}
                    id={gen.id}
                  />
                </div>
              </div>
            );
          })}
          {<p className={styles.alert}>{errors.genres}</p>}
          <h3>Plataformas</h3>
          {platforms?.map((plat) => {
            return (
              <div key={plat.id} className={styles.items}>
                <div>
                  <label>{plat.name}</label>
                  <input
                    onChange={(e) => handleCheckPlatforms(e)}
                    type="checkbox"
                    className={styles.check}
                    name={plat.name}
                    value={plat.name}
                    id={plat.id}
                  />
                </div>
              </div>
            );
          })}
          {<p className={styles.alert}>{errors.platforms}</p>}
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
        </form>
      </div>
    </div>
  );
}

/*

*/
