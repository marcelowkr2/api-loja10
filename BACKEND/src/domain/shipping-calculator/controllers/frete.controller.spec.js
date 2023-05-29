const app = require ('../../..');
const supertest = require ("supertest");

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/frete')
            .send({

                sCepDestino: "01001001",

            })
    
            expect(response.status).toBe(201)  
        })
    })
})