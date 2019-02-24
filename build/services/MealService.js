"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyMeals = _interopRequireDefault(require("../utils/dummyMeals"));

var _Meal = _interopRequireDefault(require("../models/Meal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyMeals.default.meals.map(function (meal) {
      var newMeal = new _Meal.default();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      newMeal.menuId = meal.menuId;
      return newMeal;
    });

    return validMeals;
  },
  addMeal: function addMeal(meal) {
    var mealLength = _dummyMeals.default.meals.length;
    var lastId = _dummyMeals.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;
    meal.menuId = 1;

    _dummyMeals.default.meals.push(meal);

    return meal;
  },
  updateMeal: function updateMeal(id, updatedMeal) {
    var theMeal = _dummyMeals.default.meals.find(function (oneMeal) {
      return oneMeal.id === Number(id);
    });

    if (theMeal) {
      theMeal.name = updatedMeal.name;
      theMeal.price = updatedMeal.price;
      theMeal.size = updatedMeal.size;
    }

    return theMeal;
  },
  getAMeal: function getAMeal(id) {
    var meal = _dummyMeals.default.meals.find(function (oneMeal) {
      return oneMeal.id === Number(id);
    });

    return meal || {};
  },
  // delete a meal
  deleteMeal: function deleteMeal(id) {
    var mealToDelete = _dummyMeals.default.meals.find(function (oneMeal) {
      return oneMeal.id === Number(id);
    });

    if (mealToDelete) {
      _dummyMeals.default.meals = _dummyMeals.default.meals.filter(function (deletedMeal) {
        return deletedMeal.id !== mealToDelete.id;
      });
    }
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=MealService.js.map