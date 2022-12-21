const express = require("express");
const fetch = require("node-fetch")
const { plataformas } = require("../db.js");
const getplatforms = express.Router();
// obtiene todos los generos de juegos y los agrega a una tabla
getplatforms.get("/", async (req, res) => {
  try {
    const platforms = await fetch(
      `https://api.rawg.io/api/platforms/lists/parents?key=9094a53c63b44a4bb20f4371bb277ede`
    ).then((response) => response.json());

    let plata = await platforms.results.map((platform) => {
      plataformas.findOrCreate({
        where: { name: platform.name, id: platform.id },
      });
    });
    const allplatforms = await plataformas.findAll();
    res.status(200).json(await allplatforms);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = getplatforms;
