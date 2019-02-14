import Meals from '../models/Meals';

export default class MealsService {
  fetchAllMeals() {
    this.meals = [
      {
        id: 1,
        name: 'Amala and Ewedu',
        size: 'plates',
        price: '1500',
        currency: 'NGN',
      },
      {
        id: 2,
        name: 'Fried Rice',
        size: 'plates',
        price: '800',
        currency: 'NGN',
      },
      {
        id: 3,
        name: 'Coconut Rice',
        size: 'plates',
        price: '500',
        currency: 'NGN',
      },
    ];

    return this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
  }

  getAllMeals() {
    return this.fetchAllMeals();
  }
}
