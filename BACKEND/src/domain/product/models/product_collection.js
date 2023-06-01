const mongoose = require("mongoose");
const { Collections, Products } = require(".");

let product_collectionSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    id_collection: {
      type: String,
      references:{
        model:Collections,
        key: 'id'
    }
    },
    id_product: {
      type: String,
      references: {
        model:Products,
        key: 'id'
      }
      },
      createdAt: {
        allowNull: false,
        type: Date
      },
      updatedAt: {
        allowNull: false,
        type: Date
      }
    },
  {
    tableName: "product_collections",
  }
);

module.exports = mongoose.model("Product_Collections", product_collectionSchema);
