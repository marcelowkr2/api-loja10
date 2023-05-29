const { validate, Joi } = require ("express-validation");

module.exports = validate({
  body: Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),    
    description:Joi.string().required().min(10)
  }),
});

