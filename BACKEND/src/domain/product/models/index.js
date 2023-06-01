const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // Definição dos campos do modelo Product
});

const collectionSchema = new mongoose.Schema({
  // Definição dos campos do modelo Collection
});

const colorSchema = new mongoose.Schema({
  // Definição dos campos do modelo Color
});

const materialSchema = new mongoose.Schema({
  // Definição dos campos do modelo Material
});

const productAlbumSchema = new mongoose.Schema({
  id_product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  // Definição dos campos do modelo ProductAlbum
});

const highlightSchema = new mongoose.Schema({
  id_product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  // Definição dos campos do modelo Highlight
});

const ratingSchema = new mongoose.Schema({
  id_product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  // Definição dos campos do modelo Rating
});

// ...

// Crie os modelos a partir dos esquemas
const Product = mongoose.model("Product", productSchema);
const Collection = mongoose.model("Collection", collectionSchema);
const Color = mongoose.model("Color", colorSchema);
const Material = mongoose.model("Material", materialSchema);
const ProductAlbum = mongoose.model("ProductAlbum", productAlbumSchema);
const Highlight = mongoose.model("Highlight", highlightSchema);
const Rating = mongoose.model("Rating", ratingSchema);

module.exports = {
  Product,
  Collection,
  Color,
  Material,
  ProductAlbum,
  Highlight,
  Rating,
  // ...
};
