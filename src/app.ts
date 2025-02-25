import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
import { BicycleRoutes } from './app/modules/bicycle/bicycle.route';
import { OrderRoutes } from './app/modules/order/order.route';
import authRoute from './app/modules/Auth/auth.route';

export const app: Application = express();

//parsers
app.use(express.json());
app.use(cors({origin:'*',credentials:true}));
app.use('/api/auth', authRoute);
app.use('/api/users', UserRoutes);
app.use('/api/bicycles', BicycleRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server is live',
  });
});
app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({success:false,message:err.message,error:err})
})
export default app;
