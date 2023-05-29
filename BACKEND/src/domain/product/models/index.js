const Collections = require("./collection");
const Sizes = require("./size");
const Colors = require("./color");
const Materials = require("./material");
const Product_Materials = require("./product_material");
const Products = require("./product");
const Product_Sizes = require("./product_size");
const Product_Colors = require("./product_color");
const Product_Collections = require("./product_collection");
const Product_Albums = require("./product_album");
const Highlights = require("./highlight");
const Ratings = require("./rating");

Products.hasMany(Product_Albums, {
  foreignKey: "id_product",
});

Product_Albums.belongsTo(Products, {
  foreignKey: "id_product",
});

Products.hasMany(Highlights, {
  foreignKey: "id_product",
});

Highlights.belongsTo(Products, {
  foreignKey: "id_product",
});

Products.hasMany(Ratings,{
    foreignKey:'id_product',
})

Ratings.belongsTo(Products,{
    foreignKey:'id_product',
})

Products.belongsToMany(Collections,{
    foreignKey:'id_product',
    through:Product_Collections
})

Collections.belongsToMany(Products,{
    foreignKey:'id_collection',
    through:Product_Collections
})

Products.belongsToMany(Colors,{
    foreignKey:'id_product',
    through:Product_Colors
})

Colors.belongsToMany(Products,{
    foreignKey:'id_color',
    through:Product_Colors
})

Products.belongsToMany(Materials,{
    foreignKey:'id_product',
    through:Product_Materials
})

Materials.belongsToMany(Products,{
    foreignKey:'id_material',
    through:Product_Materials
})

Products.belongsToMany(Sizes,{
    foreignKey:'id_product',
    through:Product_Sizes
})

Sizes.belongsToMany(Products,{
    foreignKey:'id_size',
    through:Product_Sizes
})


module.exports = {
    Products,
    Collections,
    Colors,
    Materials,
    Sizes,
    Product_Albums,
    Ratings,
    Highlights,
    Product_Materials,
    Product_Sizes,
    Product_Colors,
    Product_Collections
};
