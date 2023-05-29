const app = require ('../../..');
const supertest = require ("supertest");

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/duvida')
            .send({
                name: "Antonio",
                email: "antonio@gmail.com",
                notes: "teste teste teste teste teste teste"
            })
    
            expect(response.status).toBe(201)  
        })
    })
})