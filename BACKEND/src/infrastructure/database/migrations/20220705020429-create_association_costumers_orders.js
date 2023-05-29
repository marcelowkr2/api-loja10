'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      // 'orders',
      // 'id_customer',
      // {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'customers', key: 'id' },
      //   onDelete: 'CASCADE',
      //   allowNull: false,
      // },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      // 'orders',
      // 'id_customer',
      // { }
      );
  }
};