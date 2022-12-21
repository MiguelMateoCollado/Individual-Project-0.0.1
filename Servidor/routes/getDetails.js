const express = require("express");
const getDetails = express.Router();
const { videogame, generos } = require("../db.js");
const getGames = require("./videogames/getVideogames");

getDetails.get("/:id", async (req, res) => {
  // Esta parte analiza lo que pasaron por name y si encuentra algo en la base de datos lo trae
  try {
    const { id } = req.params;
let list = await getGames();
    if (isNaN(id)) {
      const gameFinded = await videogame.findOne({
        where: {
          id: req.params.id,
        },
        include: {
          model: generos,
          through: {
            where: {
              videogameId: req.params.id,
            },
            attributes: [],
          },
        },
      });
      return res.status(200).json(gameFinded);
    }
    

    let gameFinded = list.filter((game) => game.id === parseInt(id));

    const GameDetail = {
      name: gameFinded[0].name,
      date: gameFinded[0].released,
      image: gameFinded[0].background_image,
      rating: gameFinded[0].rating,
      platforms: gameFinded[0].platforms.map(
        (platform) => platform.platform.name
      ),
      generos: gameFinded[0].genres.map((gen) => gen.name)
    };
    return res.json(GameDetail);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = getDetails;
