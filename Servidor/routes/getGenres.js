const express = require("express");
const fetch = require("node-fetch")
const { generos } = require("../db.js");
const getgeneros = express.Router();
// obtiene todos los generos de juegos y los agrega a una tabla
getgeneros.get("/", async (req, res) => {
  try {
    const generosList = await fetch(
      `https://api.rawg.io/api/genres?key=9094a53c63b44a4bb20f4371bb277ede`
    ).then((response) => response.json());

    let gen = await generosList.results.map((gen) => {
      generos.findOrCreate({
        where: { name: gen.name, id: gen.id },
      });
    });
    const allGeneros = await generos.findAll();
    res.status(200).json(await allGeneros);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = getgeneros;
