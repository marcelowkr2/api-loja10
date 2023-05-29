const { Orders } = require("../models");
const { Order_Details } = require("../models");
const { Customers } = require("../models");

const orderService = {
  async createOrder(req) {
    console.log(req.body);

    try {
      const newOrder = await Orders.create({
        total_order: req.body.total_order,
        discount: req.body.discount,
        products_quantity: req.body.products_quantity,
        shipping_total: req.body.shipping_total,
        id_customer: await getCustomerId(
          req.body.name,
          req.body.phone,
          req.body.email
        ),
      });

      req.body.Products.forEach((produto) => {
        Order_Details.create({
          id_order: newOrder.id,
          id_product: produto.id_product,
          amount: produto.amount,
          unit_value: produto.unit_value,
          total_value: produto.unit_value * produto.amount,
          percentage_discount: produto.percentage_discount,
          id_product_size: produto.id_product_size,
          id_product_color: produto.id_product_color,
          id_product_material: produto.id_product_material,
        });
      });

      async function getCustomerId(name, phone, email) {
        const searchCustomer = await Customers.findAll({
          where: {
            name,
            phone,
            email,
          },
        });
        if (!searchCustomer.length > 0) {
          return insertCustomer(name, phone, email);
        }
        return searchCustomer[0].id;
      }

      async function insertCustomer(name, phone, email) {
        const createCustomer = await Customers.create({
          name,
          phone,
          email,
        });
        return createCustomer.id;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = orderService;
