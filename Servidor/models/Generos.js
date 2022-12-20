const { DataTypes } = require("sequelize");

module.exports = (database) => {
  database.define(
    "generos",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
