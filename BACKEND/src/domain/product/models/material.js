const mongoose = require("mongoose");

let materialSchema = new mongoose.Schema(
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
    tableName: "materials",
  }
);


module.exports = mongoose.model("Materials", materialSchema);
