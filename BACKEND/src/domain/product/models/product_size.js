const mongoose = require("mongoose");
const Products = require("./product");


let product_sizeSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    id_size: {
      type: String,
      references:{
        model: Products,
        key: 'id'
    }
    },
    id_product: {
      type: String,
      references:{
        model: Products,
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
    tableName: "product_sizes",

  }
);

module.exports = mongoose.model("Product_Sizes", product_sizeSchema);

