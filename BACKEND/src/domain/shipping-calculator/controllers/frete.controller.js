const { Request, Response } = require("express");
const FreteService = require("../services/index");

const FreteController = {

  async getFrete(req, res) {
    try {
      const frete = await FreteService.calculaFrete(req);      
      return res.status(201).json(frete);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = FreteController;



