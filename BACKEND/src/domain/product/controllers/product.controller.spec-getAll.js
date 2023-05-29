const app = require("../../..");
const supertest = require('supertest');


describe('No controller ao executar a funcao', () => {

  describe('getAll', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/hello-world')       

      expect(response.status).toBe(200)
    })
    
  })


});