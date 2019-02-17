import { Router } from 'express';

import OrdersController from '../controllers/ordersController';

const router = Router();

router.get('/', OrdersController.fetchAllOrders);
router.post('/', OrdersController.selectOrder);
router.put('/:id', OrdersController.modifyOrder);


export default router;
