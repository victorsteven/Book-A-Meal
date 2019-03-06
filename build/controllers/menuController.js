"use strict";

var Menu = require('../models').Menu;

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
  }
};
//# sourceMappingURL=menuController.js.map