const Meal = require('../models').Meal;

module.exports = {
  create(req, res) {
    console.log(req.params);
    return Meal
      .create({
        name: req.body.name,
        size: req.body.size,
        price: req.body.price,
        menuId: req.params.menuId,
      })
      .then(meal => res.status(201).send(meal))
      .catch(error => res.status(400).send(error));
  },

  updateMeal(req, res) {
    return Meal
      .find({
        where: {
          id: req.params.mealId,
          menuId: req.params.menuId
        }
      })
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({
            message: 'meal not found',
          });
        }
        return meal
          .update({
            name: req.body.name || meal.name,
            price: req.body.price || meal.price,
            size: req.body.size || meal.size,

          })
          .then(updated => res.status(200).send(updated))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  deleteMeal(req, res) {
    return Meal
      .find({
        where: {
          id: req.params.mealId,
          menuId: req.params.menuId
        }
      })
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({
            message: 'meal not found'
          });
        }

        return meal
          .destroy()
          .then(() => res.status(200).send({
            message: 'deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
