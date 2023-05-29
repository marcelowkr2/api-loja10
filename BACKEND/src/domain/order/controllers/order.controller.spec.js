const app = require ('../../..');
const supertest = require ("supertest");

describe('No controller, ao executar função', () => {

    describe('create', () => {

        test('em caso de sucesso, deve retornar 201', async () => {
            const response = await supertest(app)
            .post('/pedido')
            .send({
                "name": "Rafael",
                "phone": "123456789",
                "email": "rafale@gmail.com",
                "total_order": 39,
                "discount": null,
                "products_quantity": 1,
                "shipping_total": 1,
                "Products": [
                  {
                    "id_product": 1,
                    "id_product_size": null,
                    "id_product_color": null,
                    "id_product_material": null,
                    "amount": 1,
                    "unit_value": 39,
                    "percentage_discount": null
                  },
                   {
                    "id_product": 2,
                    "id_product_size": null,
                    "id_product_color": null,
                    "id_product_material": null,
                    "amount": 1,
                    "unit_value": 39,
                    "percentage_discount": null
                  },
                  {
                    "id_product": 3,
                    "id_product_size": 1,
                    "id_product_color": 1,
                    "id_product_material": 1,
                    "amount": 1,
                    "unit_value": 500,
                    "percentage_discount": null
                  }
                ]
              })
    
            expect(response.status).toBe(201)  
        })
    })
})