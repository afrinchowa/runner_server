import { IOrder } from './order.interface';
import { OrderModel } from './order.model';


const createOrderIntoDB = async (order: IOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};
const getSingleOrderFromDB = async (_id:string) => {
  const result = await OrderModel.findOne({id:_id});
  return result;
};
const updateOrderOnDB = async (id: string, data:IOrder) => {
  const result = await OrderModel.findByIdAndUpdate( id,data,
   { new:true}
  );
  return result;
};
const deleteOrderFromDB = async (id: string) => {
  const result = await OrderModel.findByIdAndDelete(id, { isDeleted: true });
  return result;
};
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
  getSingleOrderFromDB,
  updateOrderOnDB,
  deleteOrderFromDB
};
