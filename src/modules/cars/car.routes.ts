//@ts-nocheck
import { Router } from 'express';
import * as carController from './car.controller';
import { validate } from './car.middleware';
import { carSchema } from './car.validation';
//import { authenticateToken } from '../auth/auth.middleware';

const router = Router();
// depois, colocar em cada uma das routas o authenticateToken, após puxar 
// o auth do github.

router.post('/', validate(carSchema), carController.createCar);
router.get('/', carController.getCars);
router.get('/:id', carController.getCarById);
router.put('/:id', carController.updateCar);
router.delete('/:id', carController.deleteCar);

export default router;
