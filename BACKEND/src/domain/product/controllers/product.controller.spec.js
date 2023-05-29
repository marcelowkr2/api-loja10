const app = require("../../..");
const supertest = require('supertest');




describe('No controller ao executar a funcao', () => {

  describe('getAll', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo')       

      expect(response.status).toBe(200)
    })  
  })
  describe('getHighlights', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/destaques')       

      expect(response.status).toBe(200)
    })   
  })
  describe('getLacos', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/lacos')       

      expect(response.status).toBe(200)
    })    
  })
  describe('getColecaoParis', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/colecaoparis')       

      expect(response.status).toBe(200)
    })    
  })
  describe('getTiaras', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/tiaras')       

      expect(response.status).toBe(200)
    })    
  })
  describe('getAcessorios', () => {

    test("em caso de sucesso, deve retornar 200", async () => {
      const response = await supertest(app)
        .get('/catalogo/acessorios')       

      expect(response.status).toBe(200)
    })    
  })
});