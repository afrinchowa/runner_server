import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../../middlewares/auth';
const router = express.Router();
// will call controller function
router.post('/create-user', UserControllers.createUser);
router.get('/',auth("admin"), UserControllers.getAllUsers);
router.get('/:userId', UserControllers.getSingleUser);
router.put('/:userId', UserControllers.updateUser);
router.delete('/:userId', UserControllers.getSingleUser);



export const UserRoutes=router;
