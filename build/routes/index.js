'use strict';

var _menus = require('../controllers/menus');

var _menus2 = _interopRequireDefault(_menus);

var _meals = require('../controllers/meals');

var _meals2 = _interopRequireDefault(_meals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {
  //   app.get('/api'v1/, (req, res) => res.status(200).send({
  //     message: 'Welcome to the Meals API!',
  //   }));

  app.post('/api/v1/menus', _menus2.default.create);
  app.get('/api/v1/menus', _menus2.default.list);
  app.get('/api/v1/menus/:menuId', _menus2.default.retrieve);
  app.put('/api/v1/menus/:menuId', _menus2.default.update);
  app.delete('/api/v1/menus/:menuId', _menus2.default.destroy);

  app.post('/api/v1/menus/:menuId/items', _meals2.default.create);
  app.put('/api/v1/menus/:menuId/items/:mealId', _meals2.default.updateMeal);
  app.delete('/api/v1/menus/:menuId/items/:mealId', _meals2.default.deleteMeal);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/v1/menus/:menuId/items', function (req, res) {
    res.status(405).send({
      message: 'Welcome to the application. Start exploring the endpoints'
    });
  });
};
//# sourceMappingURL=index.js.map