const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");
const  Sizes  = require('./size');
const  Products  = require ("./product");


const Product_Sizes = db.define(
  "Product_Sizes",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_size: {
      type: DataTypes.INTEGER,
      references:{
        model: Sizes,
        key: 'id'
    }
    },
    id_product: {
      type: DataTypes.INTEGER,
      references:{
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
    tableName: "product_sizes",

  }
);

module.exports = Product_Sizes
