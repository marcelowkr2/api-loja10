const mongoose = require("mongoose");
const { Products } = require(".");

let rastingSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    id_product: {
      type: String,
      foreignKey: true,
      references: {
        model:Products,
        key: "id",
      },
    },
    description: {
      type: String
    },
    date: {
      type: Date
    },
    evaluation_grade: {
      type: String
    },
    author: {
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
    tableName: "ratings",
  }
);

module.exports = mongoose.model("Ratings", rastingSchema);
