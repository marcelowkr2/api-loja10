const mongoose = require("mongoose");
const { Products } = require(".");

let highlightSchema = new mongoose.Schema(
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
    status: {
      type: String,
    },
    createdAt: {
      allowNull: false,
      type: Date,
    },
    updatedAt: {
      allowNull: false,
      type: Date,
    },
  },
  {
    tableName: "highlights",
  }
);


module.exports = mongoose.model("Highlights", highlightSchema);

