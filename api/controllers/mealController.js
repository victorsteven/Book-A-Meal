import MealService from '../services/MealService';

const MealController = {
  fetchAllMeals(req, res) {
    const allMeals = MealService.fetchAllMeals();
    return res.json({
      status: 'success',
      data: allMeals,
    }).status(200);
  },
  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.json({
      status: 'success',
      data: createdMeal,
    }).status(201);
  },

  updateAMeal(req, res) {
    const updateMeal = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number',
      });
    }
    const updatedMeal = MealService.updateMeal(id, updateMeal);
    return res.json({
      status: 'success',
      data: updatedMeal,
    }).status(201);
  },

  getSingleMeal(req, res) {
    const { id } = req.params;
    const foundMeal = MealService.getAMeal(id);
    // console.log('the found meal: ', foundMeal);
    return res.json({
      status: 'success',
      data: foundMeal,
    }).status(200);
  },

  deleteMeal(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid ID. ID must be a number',
      });
    }
    const deletedMeal = MealService.deleteMeal(id);
    return res.json({
      status: 'success',
      data: deletedMeal,
    }).status(201);
  },
};

export default MealController;
