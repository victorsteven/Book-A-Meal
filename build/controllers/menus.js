'use strict';

var Menu = require('../models').Menu;
// import {Todo} from '../models/todo';

var Meal = require('../models').Meal;

module.exports = {
  create: function create(req, res) {
    return Menu.create({
      name: req.body.name
    }).then(function (menu) {
      return res.status(201).send(menu);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  list: function list(req, res) {
    return Menu.findAll({
      include: [{
        model: Meal,
        as: 'meals'
      }]
    }).then(function (menus) {
      return res.status(200).send(menus);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  retrieve: function retrieve(req, res) {
    return Menu.findById(req.params.menuId, {
      include: [{
        model: Meal,
        as: 'meals'
      }]
    }).then(function (menu) {
      if (!menu) {
        return res.status(404).send({
          message: 'menu not found'
        });
      }
      return res.status(200).send(menu);
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  update: function update(req, res) {
    return Menu.findById(req.params.menuId, {
      include: [{
        model: Meal,
        as: 'meals'
      }]
    }).then(function (menu) {
      if (!menu) {
        return res.status(404).send({
          message: 'menu not found'
        });
      }
      return menu.update({
        name: req.body.name || menu.name
      }).then(function () {
        return res.status(200).send(menu);
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  },
  destroy: function destroy(req, res) {
    return Menu.findById(req.params.menuId).then(function (menu) {
      if (!menu) {
        return res.status(400).send({
          message: 'menu not found'
        });
      }
      return menu.destroy().then(function () {
        return res.status(201).send({
          message: 'menu deleted'
        });
      }).catch(function (error) {
        return res.status(400).send(error);
      });
    }).catch(function (error) {
      return res.status(400).send(error);
    });
  }
};
//# sourceMappingURL=menus.js.map