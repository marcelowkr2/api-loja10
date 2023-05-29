const db = require("../../../infrastructure/database");
const Questions = require('../models/question');

const QuestionService = {
  async postQuestion(req) {
    //const {name, email, description} = data.body;
    console.log(req.body)
    try {
        const postQuestion = await Questions.create(req.body);  
        console.log(postQuestion);
        return postQuestion;
      } catch (error) {
        console.log(error);
      }
    },
}
module.exports = QuestionService;
