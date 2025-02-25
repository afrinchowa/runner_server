import { IUser } from './user.interface';
import User from './user.model';

const createUserIntoDB = async (payload: IUser)  => {
  const result = await User.create(payload);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};
const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};
const updateUserOnDB = async (id: string, data:IUser) => {
  const result = await User.findByIdAndUpdate( id,data,
   { new:true}
  );
  return result;
};
const deleteUserFromDB = async (id: string) => {
  const result = await User.findByIdAndDelete(id, { isDeleted: true });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserOnDB,
  deleteUserFromDB,
};
