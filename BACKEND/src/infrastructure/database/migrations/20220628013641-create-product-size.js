
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_sizes', {
     
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_size: {
        type: Sequelize.INTEGER,
        references: { model: 'sizes', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
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
    await queryInterface.dropTable('product_sizes');
  }
};