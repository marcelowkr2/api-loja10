const { Request, Response } = require("express");
const questionService = require("../services/index");

const QuestionController = {

  async postQuestion(req, res) {
    try {
      const question = await questionService.postQuestion(req);      
      return res.status(201).json(question);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
}

module.exports = QuestionController;
