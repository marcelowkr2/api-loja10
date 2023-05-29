const  Collections  = require ("./collection");
const  Products = require ("./product");

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Product_Collections = db.define(
  "Product_Collections",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_collection: {
      type: DataTypes.INTEGER,
      references:{
        model: Collections,
        key: 'id'
    }
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: Products,
        key: 'id'
      }
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
    tableName: "product_collections",
  }
);

module.exports = Product_Collections