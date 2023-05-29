
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_details', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_order: {
        type: Sequelize.INTEGER,
        references: { model: 'orders', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_product: {
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER
      },
      unit_value: {
        type: Sequelize.DECIMAL(10,2)
      },
      percentage_discount: {
        type: Sequelize.DECIMAL
      },
      total_value: {
        type: Sequelize.DECIMAL(10,2)
      },
      id_product_size: {
        type: Sequelize.INTEGER,
        references: { model: 'product_sizes', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_product_color: {
        type: Sequelize.INTEGER,
        references: { model: 'product_colors', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false,
      },
      id_product_material: {
        type: Sequelize.INTEGER,
        references: { model: 'product_materials', key: 'id'},
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
    await queryInterface.dropTable('order_details');
  }
};