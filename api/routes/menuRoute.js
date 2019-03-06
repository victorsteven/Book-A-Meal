import { Router } from 'express';
import menuController from '../controllers/menuController';

const router = Router();

router.post('/', menuController.create);
router.get('/', menuController.list);

export default router;
