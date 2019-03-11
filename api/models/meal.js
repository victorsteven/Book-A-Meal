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
  }, {});
  Meal.associate = (models) => {
    // associations can be defined here
    Meal.belongsTo(models.Meal, {
      foreignKey: 'menuId',
    });
  };
  return Meal;
};
