'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 1,
          name: "10x15cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 2,
          name: "11x5cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 3,
          name: "12x7.5cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 4,
          name: "15x17cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 5,
          name: "15x25cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 6,
          name: "2x0.5cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 7,
          name: "20x15cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 8,
          name: "21x15cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 9,
          name: "39cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 10,
          name: "40cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 11,
          name: "41cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 12,
          name: "4x3cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 13,
          name: "57cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 14,
          name: "6cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 15,
          name: "60cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 16,
          name: "7cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "sizes",
      [
        {
          id: 17,
          name: "7.5x2cm",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sizes', null, {});
  
  }
};
