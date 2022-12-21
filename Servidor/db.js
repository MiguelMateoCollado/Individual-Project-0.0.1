const { Sequelize } = require("sequelize");
const videogameModel = require("./models/Videogames");
const platformsModel = require("./models/Plataformas");
const genresModel = require("./models/Generos");
require("dotenv").config();
const fs = require("fs");
DB_URL = process.env.DB;
DB_DEPLOY = process.env.DB_DEPLOY;

/*
const database = new Sequelize(DB_URL, {
  logging: false,
  native: false,
});

*/

const database = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

videogameModel(database);
genresModel(database);
platformsModel(database);

const { videogame, generos, plataformas } = database.models;
videogame.belongsToMany(generos, { through: "genero_game" });
generos.belongsToMany(videogame, { through: "genero_game" });
videogame.belongsToMany(plataformas, { through: "plataformas_game" });
plataformas.belongsToMany(videogame, { through: "plataformas_game" });

module.exports = { conn: database, ...database.models };
