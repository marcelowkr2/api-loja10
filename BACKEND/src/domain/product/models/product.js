const mongoose = require("mongoose");

let productSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    description: {
      type: String
    },
    model: {
      type: String
    },
    type: {
      type: String
    },
    price: {
      type: Number
    },
    weight: {
      type: Number
    },
    notes: {
      type: String
    },
    overall_evaluation: {
      type: String
    },
    status: {
      type: String
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
    tableName: "products",
  }
);


module.exports = mongoose.model("Products", productSchema);
