import express from 'express';
import MealsService from '../services/MealsService';

// const { getAllMeals } = MealsService;

const router = express.Router();

router.get('/', MealsService.getAllMeals);
router.post('/', MealsService.addMeal);

export default router;
