"use strict";

// import Meal from '../models/meal';
var Meal = require('../models').Meal;

module.exports = {
  create: function create(req, res) {
    // return req.params
    console.log(req.params); // return req.params.menuId;

    return Meal.create({
      name: req.body.name,
      size: req.body.size,
      price: req.body.price,
      menuId: req.params.menuId
    }).then(function (meal) {
      return res.status(201).send(meal);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  list: function list(req, res) {
    return Meal.findAll({}).then(function (todos) {
      return res.status(200).send(todos);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  updateMeal: function updateMeal(req, res) {
    console.log(req.params);
    return Meal.find({
      where: {
        id: req.params.mealId,
        menuId: req.params.menuId
      }
    }).then(function (meal) {
      if (!meal) {
        return res.status(404).send({
          message: 'meal not found'
        });
      }

      console.log('we have the meal', meal);
      return Meal.update({
        name: req.body.name || meal.name,
        size: req.body.size || meal.size,
        price: req.body.price || meal.price
      }).then(function (updated) {
        return res.status(200).send(updated);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  deleteMeal: function deleteMeal(req, res) {
    return Meal.find({
      where: {
        id: req.params.mealId,
        menuId: req.params.menuId
      }
    }).then(function (meal) {
      if (!meal) {
        return res.status(404).send({
          message: 'meal not found'
        });
      }

      return Meal.destroy().then(function () {
        return res.status(200).send({
          message: 'deleted'
        });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }
};
//# sourceMappingURL=mealController.js.map