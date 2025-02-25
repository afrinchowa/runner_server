import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { create } from 'domain';
import { orderValidationSchema } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    // data validation
    const zodParseData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDB();

    res.status(200).json({
      success: true,
      message: 'Orders is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getSingleOrderFromDB(orderId);

    res.status(200).json({
      success: true,
      message: 'Order is retrived successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const body = req.body;
    const result = await OrderServices.updateOrderOnDB(orderId, body);

    res.status(200).json({
      success: true,
      message: 'Order is updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.deleteOrderFromDB(orderId);

    res.status(200).json({
      success: true,
      message: 'Order is deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
export const OrderControllers = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder
};
