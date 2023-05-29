'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 1,
          id_collection: 1,
          id_product:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 2,
          id_collection: 1,
          id_product:2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 3,
          id_collection: 1,
          id_product:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 4,
          id_collection: 1,
          id_product:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 5,
          id_collection: 2,
          id_product:5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 6,
          id_collection: 2,
          id_product:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 7,
          id_collection: 2,
          id_product:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "product_collections",
      [
        {
          id: 8,
          id_collection: 2,
          id_product:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('product_collections', null, {});
     
  }
};
