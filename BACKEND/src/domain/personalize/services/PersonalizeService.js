const db = require("../../../infrastructure/database");
const Personalized_Orders = require('../models/personalized_order');

const PersonalizedService = {
  async postPersonalize(req) {
    //const {name, email, description} = data.body;
    console.log(req.body)
    try {
        const postPersonalize = await Personalized_Orders.create(req.body);  
        console.log(postPersonalize);
        return postPersonalize;
      } catch (error) {
        console.log(error);
      }
    },
}
module.exports = PersonalizedService;