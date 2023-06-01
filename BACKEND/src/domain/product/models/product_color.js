const mongoose = require("mongoose"); 
const { Products, Colors } = require(".");



let product_collorSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    id_product: {
      type: String,
      foreign_key: true,
      references:{
        model:Products,
        key: 'id' 
      }     
    },
    id_color: {
      type: String,
      foreign_key: true,
      references:{
        model:Colors,
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
    tableName: "product_colors",
  }
);

module.exports = mongoose.model("Product_Colors", product_collorSchema);
