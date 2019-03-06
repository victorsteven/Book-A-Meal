import { Router } from 'express';
import mealController from '../controllers/mealController';

const router = Router();

router.post('/:menuId/meals', mealController.create);
router.get('/:menuId/meals', mealController.list);
router.put('/:menuId/meals/:mealId', mealController.updateMeal);
router.delete('/:menuId/meals/:mealId', mealController.deleteMeal);

export default router;
