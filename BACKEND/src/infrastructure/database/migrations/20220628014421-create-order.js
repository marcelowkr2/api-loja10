
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total_order: {
        type: Sequelize.DECIMAL(10,2)
      },
      discount: {
        type: Sequelize.DECIMAL(5,2)
      },
      products_quantity: {
        type: Sequelize.INTEGER
      },
      shipping_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};