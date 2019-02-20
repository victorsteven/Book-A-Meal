import { Router } from 'express';

import MealController from '../controllers/mealController';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.getSingleMeal);
router.patch('/:id', MealController.updateAMeal);
router.delete('/:id', MealController.deleteMeal);


export default router;
