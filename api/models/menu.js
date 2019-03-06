module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {});
  Menu.associate = (models) => {
    // associations can be defined here
    Menu.hasMany(models.Meal, {
      foreignKey: 'menuId',
      as: 'meals',
    });
  };
  return Menu;
};
