const { DataTypes } = require("sequelize");

module.exports = (database) => {
  // defino el modelo
  database.define(
    "videogame",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      platforms: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
