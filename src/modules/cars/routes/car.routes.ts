//@ts-nocheck
import { Router } from 'express';
import * as carController from '../controllers/car.controller';
import { validate } from '../car.middleware';
import { carSchema } from '../car.validation';
import { authenticateToken } from '../../auth/auth.middleware';

const router = Router();

router.post('/', authenticateToken, validate(carSchema), carController.createCar);
router.get('/', authenticateToken, carController.getCars);
router.get('/:id', authenticateToken, carController.getCarById);
router.put('/:id', authenticateToken, validate(carSchema), carController.updateCar);
router.delete('/:id', authenticateToken, carController.deleteCar);

export default router;
