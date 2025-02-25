import { NextFunction, Request, Response } from 'express';
import { BicycleServices } from './bicycle.service';
import bicycleValidationSchema from './bicycle.validation';

const createBicycle = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { bicycle: bicycleData } = req.body;
    const zodParseBicycleData = bicycleValidationSchema.parse(bicycleData);
    const result =
      await BicycleServices.createBicycleIntoDB(zodParseBicycleData);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllBicycles = async (req: Request, res: Response) => {
  try {
    const result = await BicycleServices.getAllBicycleFromDB();

    res.status(200).json({
      success: true,
      message: 'Bicycles is retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const { bicycleId } = req.params;
    const result = await BicycleServices.getSingleBicycleFromDB(bicycleId);

    res.status(200).json({
      success: true,
      message: 'Bicycle is retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleId = req.params.bicycleId;
    const body = req.body;
    const result = await BicycleServices.updateBicycleOnDB(bicycleId, body);

    res.status(200).json({
      success: true,
      message: 'Bicycle is updated successfully',
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

const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const { bicycleId } = req.params;
    const result = await BicycleServices.deleteBicycleFromDB(bicycleId);

    res.status(200).json({
      success: true,
      message: 'Bicycle is deleted successfully',
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
export const BicycleControllers = {
  createBicycle,
  getAllBicycles,
  getSingleBicycle,
  updateBicycle,
  deleteBicycle
};
function next(error: unknown) {
  throw new Error('Function not implemented.');
}

