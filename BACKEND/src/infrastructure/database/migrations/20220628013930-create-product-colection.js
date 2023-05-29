
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_collections', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_collection: {
        type: Sequelize.INTEGER,
        references: { model: 'collections', key: 'id'},
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
    await queryInterface.dropTable('product_collections');
  }
};