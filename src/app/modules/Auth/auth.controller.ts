import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);
  sendResponse(res, {
    status: true,
    statusCode: StatusCodes.CREATED,
    message: 'User is registered successfully',
    data: result,
    
  });
});
const login = catchAsync(async(req: Request, res: Response)=>{
    const result = await AuthService.login(req.body);

    sendResponse(res,{
        statusCode: StatusCodes.ACCEPTED,
        status: true,
        message: "User logged in successfully",
        token: result?.token,
        data: result?.user
    })
})
export const AuthController = {
  register,
  login
};
