'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dummyMeals = require('../utils/dummyMeals');

var _dummyMeals2 = _interopRequireDefault(_dummyMeals);

var _Meal = require('../models/Meal');

var _Meal2 = _interopRequireDefault(_Meal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  fetchAllMeals: function fetchAllMeals() {
    var validMeals = _dummyMeals2.default.meals.map(function (meal) {
      var newMeal = new _Meal2.default();
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
    var mealLength = _dummyMeals2.default.meals.length;
    var lastId = _dummyMeals2.default.meals[mealLength - 1].id;
    var newId = lastId + 1;
    meal.id = newId;
    meal.menuId = 1;
    _dummyMeals2.default.meals.push(meal);
    return meal;
  },
  updateMeal: function updateMeal(id, updatedMeal) {
    var theMeal = _dummyMeals2.default.meals.find(function (oneMeal) {
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
    var meal = _dummyMeals2.default.meals.find(function (oneMeal) {
      return oneMeal.id === Number(id);
    });
    return meal || {};
  },


  // delete a meal
  deleteMeal: function deleteMeal(id) {
    var mealToDelete = _dummyMeals2.default.meals.find(function (oneMeal) {
      return oneMeal.id === Number(id);
    });
    if (mealToDelete) {
      _dummyMeals2.default.meals = _dummyMeals2.default.meals.filter(function (deletedMeal) {
        return deletedMeal.id !== mealToDelete.id;
      });
    }
  }
};

exports.default = MealService;
//# sourceMappingURL=MealService.js.map