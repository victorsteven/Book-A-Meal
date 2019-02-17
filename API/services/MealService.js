import dummyData from '../utils/dummyMeals';
import Meal from '../models/Meal';

const MealService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.size = meal.size;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  updateMeal(id, updatedMeal) {
    const theMeal = dummyData.meals.find(oneMeal => oneMeal.id === Number(id));

    if (theMeal) {
      theMeal.name = updatedMeal.name;
      theMeal.price = updatedMeal.price;
      theMeal.size = updatedMeal.size;
    }
    return theMeal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(oneMeal => oneMeal.id === Number(id));
    return meal || {};
  },

  // delete a meal
  deleteMeal(id) {
    const mealToDelete = dummyData.meals.find(oneMeal => oneMeal.id === Number(id));
    if (mealToDelete) {
      dummyData.meals = dummyData.meals.filter(deletedMeal => deletedMeal.id !== mealToDelete.id);
    }
  },
};

export default MealService;
