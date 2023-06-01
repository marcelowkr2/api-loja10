const mongoose = require("mongoose");

let customersSchema = new mongoose.Schema(
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
    phone: {
      type: String
    },
    email: {
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
    tableName: "customers",
  }
);

module.exports = mongoose.model("Customers", customersSchema);

