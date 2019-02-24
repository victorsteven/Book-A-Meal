"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MealService = _interopRequireDefault(require("../services/MealService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealController = {
  fetchAllMeals: function fetchAllMeals(req, res) {
    var allMeals = _MealService.default.fetchAllMeals();

    return res.json({
      status: 'success',
      data: allMeals
    }).status(200);
  },
  addAMeal: function addAMeal(req, res) {
    var newMeal = req.body;

    var createdMeal = _MealService.default.addMeal(newMeal);

    return res.json({
      status: 'success',
      data: createdMeal
    }).status(201);
  },
  updateAMeal: function updateAMeal(req, res) {
    var updateMeal = req.body;
    var id = req.params.id;

    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number'
      });
    }

    var updatedMeal = _MealService.default.updateMeal(id, updateMeal);

    return res.json({
      status: 'success',
      data: updatedMeal
    }).status(201);
  },
  getSingleMeal: function getSingleMeal(req, res) {
    var id = req.params.id;

    var foundMeal = _MealService.default.getAMeal(id);

    return res.json({
      status: 'success',
      data: foundMeal
    }).status(200);
  },
  deleteMeal: function deleteMeal(req, res) {
    var id = req.params.id;

    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number'
      });
    }

    var deletedMeal = _MealService.default.deleteMeal(id);

    return res.json({
      status: 'success',
      data: deletedMeal
    }).status(201);
  }
};
var _default = MealController;
exports.default = _default;
//# sourceMappingURL=mealController.js.map