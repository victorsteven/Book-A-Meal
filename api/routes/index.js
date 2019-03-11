import menusController from '../controllers/menus';
import mealsController from '../controllers/meals';


module.exports = (app) => {
//   app.get('/api'v1/, (req, res) => res.status(200).send({
//     message: 'Welcome to the Meals API!',
//   }));

  app.post('/api/v1/menus', menusController.create);
  app.get('/api/v1/menus', menusController.list);
  app.get('/api/v1/menus/:menuId', menusController.retrieve);
  app.put('/api/v1/menus/:menuId', menusController.update);
  app.delete('/api/v1/menus/:menuId', menusController.destroy);


  app.post('/api/v1/menus/:menuId/items', mealsController.create);
  app.put('/api/v1/menus/:menuId/items/:mealId', mealsController.updateMeal);
  app.delete('/api/v1/menus/:menuId/items/:mealId', mealsController.deleteMeal);


  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/v1/menus/:menuId/items', (req, res) => {
    res.status(405).send({
      message: 'Welcome to the application. Start exploring the endpoints',
    });
  });
};
