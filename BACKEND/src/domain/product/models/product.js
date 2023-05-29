const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Products = db.define(
  "Products",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL
    },
    weight: {
      type: DataTypes.DECIMAL
    },
    notes: {
      type: DataTypes.STRING
    },
    overall_evaluation: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.INTEGER
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
    tableName: "products",
  }
);
Products.sync();
module.exports = Products