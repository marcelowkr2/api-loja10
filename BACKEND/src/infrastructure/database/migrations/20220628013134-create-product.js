
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
    
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      price:{
        type:Sequelize.DECIMAL
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      notes: { 
        type: Sequelize.STRING(1024)
      },
      overall_evaluation:{
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('products');
  }
};