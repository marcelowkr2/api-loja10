'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 1,
          description: "Linho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 2,
          description: "Cetim",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 3,
          description: "Tule",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 4,
          description: "Veludo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 5,
          description: "Cadarço",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 6,
          description: "Malha Canelada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 7,
          description: "Plástico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 8,
          description: "Metal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 9,
          description: "Linho de Poliéster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 10,
          description: "Strass",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 11,
          description: "Lurex",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 12,
          description: "Malha Acetinada",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 13,
          description: "Pedras",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 14,
          description: "Algodão",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 15,
          description: "Pérolas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 16,
          description: "Poliéster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 17,
          description: "Resina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          id: 18,
          description: "PVC",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materials', null, {});

  }
};
