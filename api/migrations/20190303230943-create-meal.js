module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Meals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      size: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      menuId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Menus',
          key: 'id',
          as: 'menuId',
        },
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Meals');
  },
};
