import menusController from '../controllers/menus';
import mealsController from '../controllers/meals';


module.exports = (app) => {
//   app.get('/api', (req, res) => res.status(200).send({
//     message: 'Welcome to the Meals API!',
//   }));

  app.post('/api/menus', menusController.create);
  app.get('/api/menus', menusController.list);
  app.get('/api/menus/:menuId', menusController.retrieve);
  app.put('/api/menus/:menuId', menusController.update);
  app.delete('/api/menus/:menuId', menusController.destroy);


  app.post('/api/menus/:menuId/items', mealsController.create);
  app.put('/api/menus/:menuId/items/:mealId', mealsController.updateMeal);
  app.delete('/api/menus/:menuId/items/:mealId', mealsController.deleteMeal);


  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/menus/:menuId/items', (req, res) => {
    res.status(405).send({
      message: 'Method not allowed',
    });
  });
};
