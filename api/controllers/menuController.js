const Menu = require('../models').Menu;
const Meal = require('../models').Meal;

module.exports = {
  create(req, res) {
    return Menu.create({
      name: req.body.name,
    })
      .then(menu => res.status(201).send(menu))
      .catch(error => res.status(400).send(error));
  },

  list(req, res) {
    return Menu.findAll({
      include: [{
        model: Meal,
        as: 'meals',
      }],
    })
      .then(menus => res.status(200).send(menus))
      .catch(error => res.status(400).send(error));
  },
};
