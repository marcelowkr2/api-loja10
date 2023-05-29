const { validate, Joi } = require ("express-validation");

module.exports = validate({
  body: Joi.object({
    sCepDestino:Joi.string().required().min(8)
  }),
});

