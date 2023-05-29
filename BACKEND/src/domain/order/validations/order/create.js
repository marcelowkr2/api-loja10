const { validate, Joi } = require("express-validation");

const create = validate({
  body: Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    total_order: Joi.number().required(),
    discount: Joi.any(),
    products_quantity: Joi.number().required(),
    shipping_total: Joi.number().required(),    
    Products:Joi.array().items(Joi.object(
      {
        id_product: Joi.number().required(),
        amount: Joi.number().required(),
        unit_value: Joi.number().required(),
        percentage_discount: Joi.any(),
        id_product_size: Joi.any(),
        id_product_color: Joi.any(),
        id_product_material: Joi.any(),
      }
    )),
  }),
});

const OrderValidation = {
  create,
};

module.exports = OrderValidation;
