const express = require("express");
const fetch = require("node-fetch")
const PostGame = express.Router();
const { videogame, generos, plataformas } = require("../db.js");
// crea un juego nuevo
PostGame.post("/", async (req, res) => {
  try {
    const {
      name,
      id,
      date,
      description,
      rating,
      platforms,
      createInDb,
      image,
      genres,
    } = req.body;

    const newGame = await videogame.create({
      name,
      id,
      date,
      description,
      rating,
      image,
      createInDb,
      platforms,
    });

    let generosDB = await generos.findAll({
      where: {
        name: genres,
      },
    });

    let platformsDB = await plataformas.findAll({
      where: {
        name: platforms,
      },
    });

    newGame.addGeneros(generosDB);
    newGame.addPlataformas(platformsDB);
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
module.exports = PostGame;
