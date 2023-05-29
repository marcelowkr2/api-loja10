"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "collections",
      [
        {
          id: 1,
          name: "Coleção Mãe e Filha",
          date_begin: new Date(),
          date_end: new Date(),
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "collections",
      [
        {
          id: 2,
          name: "Coleção Inverno Encantado",
          date_begin: new Date(),
          date_end: new Date(),
          status: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('collections', null, {});

  },
};
