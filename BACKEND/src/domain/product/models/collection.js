const mongoose = require("mongoose");

let collectionSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String,
    },
    name: {
      type: String,
    },
    date_begin: {
      type: Date,
    },
    date_end: {
      type: Date,
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
    tableName: "collections",
  }
);


module.exports = mongoose.model("Collections", collectionSchema);

