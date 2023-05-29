const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");
const Products = require("./product");

const Highlights = db.define(
  "Highlights",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_product: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: Products,
        key: "id",
      },
    },
    status: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "highlights",
  }
);

module.exports = Highlights;
