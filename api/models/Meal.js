module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.Menu, {
      foreignKey: 'mealId',
      onDelete: 'CASCADE',
    });
  };
  return Meal;
};
