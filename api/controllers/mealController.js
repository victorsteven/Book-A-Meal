// import Meal from '../models/meal';
const Meal = require('../models').Meal;

module.exports = {
  create(req, res) {
    // return req.params
    console.log(req.params);
    // return req.params.menuId;
    return Meal.create({
      name: req.body.name,
      size: req.body.size,
      price: req.body.price,
      menuId: req.params.menuId,
    })
      .then(meal => res.status(201).send(meal))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Meal.findAll({})
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },

  updateMeal(req, res) {
    console.log(req.params);
    return Meal.find({
      where: {
        id: req.params.mealId,
        menuId: req.params.menuId,
      },
    })
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({
            message: 'meal not found',
          });
        }
        console.log('we have the meal', meal);
        return Meal
          .update({
            name: req.body.name || meal.name,
            size: req.body.size || meal.size,
            price: req.body.price || meal.price,
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
          menuId: req.params.menuId,
        },
      })
      .then((meal) => {
        if (!meal) {
          return res.status(404).send({
            message: 'meal not found',
          });
        }
        return Meal
          .destroy()
          .then(() => res.status(200).send({
            message: 'deleted',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
