const db = require("../../../infrastructure/database");
const { DataTypes } = require("sequelize");
const Products = require("./product");

const Product_Albums = db.define(
  "Product_Albums",
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
    url_image: {
      type: DataTypes.STRING,
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
    tableName: "product_albums",
  }
);



module.exports = Product_Albums;
