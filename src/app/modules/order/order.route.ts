import express from 'express';
import { OrderControllers } from './order.controller';
const router = express.Router();
// will call controller function
router.post('/create-order', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrders);
router.get('/:orderId', OrderControllers.getSingleOrder);
router.put('/:orderId', OrderControllers.updateOrder);
router.delete('/:orderId', OrderControllers.getSingleOrder);
export const OrderRoutes=router;
