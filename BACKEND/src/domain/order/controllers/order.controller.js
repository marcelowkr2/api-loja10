const { Request, Response } = require("express");
const orderService = require("../services/OrderService");

const OrdersController = {

  async postOrder(req, res) {
    try {
      const newOrder = await orderService.createOrder(req);

      return res.status(201).json(await newOrder)

    } catch (error) {
      console.log(error)
      return res.status(500).json("Erro ao fazer pedido!")
    }
  }
}
module.exports = OrdersController;
