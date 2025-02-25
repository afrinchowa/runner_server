import { IBicycle } from "./bicycle.interface"
import { BicycleModel } from "./bicycle.model"


const createBicycleIntoDB = async (bicycle:IBicycle)=>{
const result=await BicycleModel.create(bicycle);
return result;
}

const getAllBicycleFromDB = async () => {
  const result = await BicycleModel.find();
  return result;
};
const getSingleBicycleFromDB = async (_id:string) => {
  const result = await BicycleModel.findOne({id:_id});
  return result;
};
const updateBicycleOnDB = async (id: string, data:IBicycle) => {
  const result = await BicycleModel.findByIdAndUpdate( id,data,
   { new:true}
  );
  return result;
};
const deleteBicycleFromDB = async (id: string) => {
  const result = await BicycleModel.findByIdAndDelete(id, { isDeleted: true });
  return result;
};
export const BicycleServices={
    createBicycleIntoDB,
    getAllBicycleFromDB,
    getSingleBicycleFromDB,
    updateBicycleOnDB,
    deleteBicycleFromDB
};