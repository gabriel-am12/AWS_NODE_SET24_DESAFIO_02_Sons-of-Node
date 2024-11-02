//@ts-nocheck
import { Router } from 'express';
import * as orderSchema from '../order.validation';
import { authenticateToken } from '../../auth/auth.middleware';
import { validateOrderCreation } from '../order.middleware';
import orderController from '../controllers/order.controller';

const router = Router();

router.post('/', authenticateToken, validateOrderCreation, orderController.createOrder);
router.get('/:id', authenticateToken, orderController.getOrderById);
router.get('/', authenticateToken, orderController.listOrders);
router.patch('/:id', authenticateToken, orderController.updateOrder);
router.delete('/:id', authenticateToken, orderController.deleteOrder);

export default router;
