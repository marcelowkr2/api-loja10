"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 1,
          name: "Preto",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 2,
          name: "Azul",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 3,
          name: "Coral",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 4,
          name: "Vinho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 5,
          name: "Rosa",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 6,
          name: "Xadrez",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 7,
          name: "Amarelo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 8,
          name: "Multicolorido",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 9,
          name: "Dourado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 10,
          name: "Preto/Dourado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 11,
          name: "Bordô",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 12,
          name: "Branco",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 13,
          name: "Vermelho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 14,
          name: "Bege",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 15,
          name: "Roxo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 16,
          name: "Roxo/Verde",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "colors",
      [
        {
          id: 17,
          name: "Prata",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    
  },

  async down(queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('colors', null, {});
     
  },
};
