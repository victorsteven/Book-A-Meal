'use strict';

module.exports = function (sequelize, DataTypes) {
  var Meal = sequelize.define('Meal', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {});
  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.Meal, {
      foreignKey: 'menuId'
    });
  };
  return Meal;
};
//# sourceMappingURL=meal.js.map