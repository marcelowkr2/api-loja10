const mongoose = require("mongoose");


let questionsSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String
    },
    name: {
      type: String
    },
    email: {
      type: String
    },
    notes: {
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
    tableName: "questions",
  }
);

module.exports = mongoose.model("Questions", questionsSchema);
