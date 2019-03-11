'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: 'menuId',
      as: 'meals'
    });
  };
  return Menu;
};
//# sourceMappingURL=menu.js.map