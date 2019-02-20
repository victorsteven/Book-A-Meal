import { Router } from 'express';

import MenuController from '../controllers/menuController';

const router = Router();

router.post('/', MenuController.setMenu);
router.get('/', MenuController.getMenu);

export default router;
