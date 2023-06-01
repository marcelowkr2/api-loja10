const mongoose = require("mongoose");

let personalizedSchema = new mongoose.Schema(
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
    tableName: "personalized_orders",  
  }
);


module.exports = mongoose.model("Personalized_Orders", personalizedSchema);
