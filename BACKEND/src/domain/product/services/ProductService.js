const { Colors } = require("../models");
const { Materials } = require("../models");
const  {Products } = require("../models");
const { Product_Albums } = require("../models");
const { Sizes } = require("../models");
const { Highlights } = require("../models");
const  {Ratings } = require("../models");


const ProductService = {
  async allProducts() {
    try {
      const fullProducts = await Products.findAll();

      return fullProducts;
    } catch (error) {
      console.log(error);
    }
  },
  
  async findProductbyType(type_product) {
    try {
      const product = await Products.findAll({
        where: { type: type_product },
        include: [
          {
            model: Product_Albums,
            required: false,
          },
          {
            model: Colors,
            required: false,
          },
          {
            model: Sizes,
            required: false,
          },
          {
            model: Materials,
            required: false,
          },
          {
            model: Ratings,
            required: false,
          },
        ],
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async findProductbyId(id) {
    try {
      const product = await Products.findAll({
        where: { id: id },
        include: [
          {
            model: Product_Albums,
            required: false,
          },
          {
            model: Colors,
            required: false,
          },
          {
            model: Sizes,
            required: false,
          },
          {
            model: Materials,
            required: false,
          },
          {
            model: Ratings,
            required: false,
          },
        ],
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  async findHighlights(res) {
    try {
      const dataHighlights = await Products.findAll({
        include: [
          {
            model: Highlights,
            required: true,
          },
          {
            model: Product_Albums,
            required: false,
          },
          {
            model: Colors,
            required: false,
          },
          {
            model: Sizes,
            required: false,
          },
          {
            model: Materials,
            required: false,
          },        
          {
            model: Ratings,
            required: false,
          }                       
        ],
      });

      return dataHighlights;
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = ProductService;
