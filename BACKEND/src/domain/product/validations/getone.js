const { validate, Joi } = require("express-validation");

const getOne = validate({
  params: Joi.object({
    id: Joi.number().required().integer(),
  }),
});

const ProductValidation = {
  getOne
};

module.exports = ProductValidation


