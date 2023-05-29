const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Sizes = db.define(
  "Sizes",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "sizes",
  }
);

module.exports = Sizes