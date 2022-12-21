const express = require("express");
const getGames = express.Router();
const axios = require("axios")
const { videogame, generos } = require("../db.js");
const getVideogames = require("./videogames/getVideogames");
// trae la lista de juegos.
getGames.get("/", async (req, res) => {
  try {
    let videogames = await getVideogames();

    let gamesDB = await videogame.findAll({
      include: generos,
      through: {
        attributes: [],
      },
    });
    let query_name = req.query.name;

    videogames = await videogames.map((game) => {
      const newGame = {
        id: game.id,
        name: game.name,
        platforms: game.platforms.map((platform) => platform.platform.name),
        generos: game.genres.map((gen) => gen.name),
        date: game.released,
        rating: game.rating,
        image: game.background_image,
      };
      return newGame;
    });

    gamesDB = await gamesDB.map((game) => {
      const newGame = {
        id: game.id,
        name: game.name,
        platforms: game.platforms,
        generos: game.generos.map((gen) => gen.name),
        date: game.date,
        rating: game.rating,
        image: game.image,
        createdInDb: game.createdInDb,
      };
      return newGame;
    });

    videogames = await videogames.concat(gamesDB);

    // esta parte trae 120 juegos desde la API
    if (query_name) {
      // Crea la lista de juegos
      query_name = query_name.toLowerCase();

      let games_by_filter = await videogames.filter((game) =>
        game.name.toLowerCase().includes(query_name)
      );

      // Crea la lista de juegos
      return res.status(200).json(games_by_filter);
    }
    return res.status(200).json(videogames);

  } catch (error) {
    res.json(error.message);
  }
});

// trae los primeros 15 juegos que coincidan con las letras del params

module.exports = getGames;
