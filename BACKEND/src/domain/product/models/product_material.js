const  Materials = require ('./material');
const  Products  = require ("./product");

const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");

const Product_Materials = db.define(
  "Product_Materials",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_product: {
      type: DataTypes.INTEGER,
      references:{
        model: Products,
        key: 'id' 
      }     
    },
    id_material: {
      type: DataTypes.INTEGER,
      references:{
        model: Materials,
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
    tableName: "product_materials",
  }
);


module.exports = Product_Materials