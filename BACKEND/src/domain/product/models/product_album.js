const mongoose = require("mongoose");
const { Products } = require(".");

let product_albumSchema = new mongoose.Schema(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: String,
    },
    id_product: {
      type: String,
      foreignKey: true,
      references: {
        model:Products,
        key: "id",
      },
    },
    url_image: {
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
    tableName: "product_albums",
  }
);


module.exports = mongoose.model("Product_Albums", product_albumSchema);

