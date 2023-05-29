'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 1,
          id_product: 12,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 2,
          id_product: 17,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 3,
          id_product: 3,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 4,
          id_product: 28,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 5,
          id_product: 16,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 6,
          id_product: 10,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 7,
          id_product: 4,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 8,
          id_product: 22,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 9,
          id_product: 31,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "highlights",
      [
        {
          id: 10,
          id_product: 14,
          status:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
 
  await queryInterface.bulkDelete('highlights', null, {});
    
  }
};
