const mongoose = require("mongoose");
const { Product_Materials } = require(".");

let product_materialSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    id_product: {
      type: String,
      references:{
        model: Product_Materials,
        key: 'id' 
      }     
    },
    id_material: {
      type: String,
      references:{
        model: Product_Materials,
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
    tableName: "product_materials",
  }
);

module.exports = mongoose.model("Product_Materials", product_materialSchema);
