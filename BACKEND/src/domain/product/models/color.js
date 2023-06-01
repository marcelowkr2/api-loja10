const mongoose = require("mongoose");

let colorSchema = new mongoose.Schema(
    {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: String
      },
      name: {
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
}, {
    tableName: 'colors'
})

module.exports = mongoose.model("Colors", colorSchema);

