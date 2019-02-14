import Meal from '../models/Meal';

export default class MealsService {
  static getAllMeals(req, res) {
    return res.status(200).json({
      status: 200,
      message: 'Got all meals',
      data: Meal,
    });
  }

  static addMeal(req, res) {
    const meal = {
      id: req.body.id,
      name: req.body.name,
      size: req.body.size,
      price: req.body.price,
      currency: req.body.currency,
    };
    Meal.push(meal);
    return res.status(201).json({
      status: 201,
      message: 'Meal added',
      data: meal,
    });
  }
}
