import express from 'express';
import { BicycleControllers } from './bicycle.controller';
const router = express.Router();
// will call controller function
router.post('/create-bicycle', BicycleControllers.createBicycle);
router.get('/', BicycleControllers.getAllBicycles);
router.get('/:bicycleId', BicycleControllers.getSingleBicycle);
router.put('/:bicycleId', BicycleControllers.updateBicycle);
router.delete('/:bicycleId', BicycleControllers.getSingleBicycle);


export const BicycleRoutes=router;
