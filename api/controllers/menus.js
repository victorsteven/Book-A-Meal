const Menu = require('../models').Menu;
// import {Todo} from '../models/todo';

const Meal = require('../models').Meal;


module.exports = {
  create(req, res) {
    return Menu
      .create({
        name: req.body.name,
      })
      .then(menu => res.status(201).send(menu))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Menu
      .findAll({
        include: [{
          model: Meal,
          as: 'meals',
        }],
      })
      .then(menus => res.status(200).send(menus))
      .catch(error => res.status(400).send(error));
  },

  retrieve(req, res) {
    return Menu
      .findById(req.params.menuId, {
        include: [{
          model: Meal,
          as: 'meals'
        }]
      })
      .then((menu) => {
        if (!menu) {
          return res.status(404).send({
            message: 'menu not found'
          });
        }
        return res.status(200).send(menu);
      })
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    return Menu
      .findById(req.params.menuId, {
        include: [{
          model: Meal,
          as: 'meals'
        }],
      })
      .then((menu) => {
        if (!menu) {
          return res.status(404).send({
            message: 'menu not found'
          });
        }
        return menu
          .update({
            name: req.body.name || menu.name,
          })
          .then(() => res.status(200).send(menu))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return Menu
      .findById(req.params.menuId)
      .then((menu) => {
        if (!menu) {
          return res.status(400).send({
            message: 'menu not found'
          });
        }
        return menu
          .destroy()
          .then(() => res.status(201).send({
            message: 'menu deleted'
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
