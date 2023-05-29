"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 1,
          id_product: 1,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 2,
          id_product: 2,
          description: "Os laços são incriveis, presentei minha namorada com um e ela curtiu pakas.",
          date: new Date(),
          evaluation_grade: 5,
          author: "Felipe Mendes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 3,
          id_product: 2,
          description: "Brasilia agradece, que produto bom!!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Marilia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 4,
          id_product: 2,
          description: "Produto de ótima qualidade.",
          date: new Date(),
          evaluation_grade: 5,
          author: "Claudio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 5,
          id_product: 2,
          description: "Presentei minha filha. Vou comprar mais agora.",
          date: new Date(),
          evaluation_grade: 5,
          author: "Rafael",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 6,
          id_product: 2,
          description: "Fantastico!!!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Jayne",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 7,
          id_product: 15,
          description: "A coleção de boinas é muito boa, produtos bem confeccionados.",
          date: new Date(),
          evaluation_grade: 5,
          author: "Anderson",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 8,
          id_product: 8,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Euller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 9,
          id_product: 10,
          description: "Gostei!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Lucas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 10,
          id_product: 20,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 11,
          id_product: 32,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Juliana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 12,
          id_product: 1,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Talita",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 13,
          id_product: 17,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Juliana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 14,
          id_product: 15,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Juliana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 15,
          id_product: 21,
          description: "Curti",
          date: new Date(),
          evaluation_grade: 5,
          author: "Felipe Mendes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 16,
          id_product: 18,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Anderson",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 17,
          id_product: 10,
          description: "Meu namorado Anderson comprou pra mim. Curti.",
          date: new Date(),
          evaluation_grade: 5,
          author: "Gabriela",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 18,
          id_product: 13,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 19,
          id_product: 1,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Rafael",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 20,
          id_product: 22,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Marilia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 21,
          id_product: 31,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Claudio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 22,
          id_product: 19,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Jayne",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 23,
          id_product: 20,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Danilo Sales",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 24,
          id_product: 16,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Lucas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "ratings",
      [
        {
          id: 25,
          id_product: 21,
          description: "Gostei , o produto é muito bem feito!",
          date: new Date(),
          evaluation_grade: 5,
          author: "Marilia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('ratings', null, {});
    
  },
};
