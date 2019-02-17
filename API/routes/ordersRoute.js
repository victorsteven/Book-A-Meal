import { Router } from 'express';

import OrdersController from '../controllers/ordersController';

const router = Router();

router.get('/', OrdersController.fetchAllOrders);
// router.post('/', OrderController.addAMeal);
// router.get('/:id', OrderController.getSingleMeal);
// router.put('/:id', OrderController.updateAMeal);
// router.delete('/:id', OrderController.deleteMeal);


export default router;
