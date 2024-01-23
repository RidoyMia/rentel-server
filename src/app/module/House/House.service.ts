import { IHouse } from "./House.interface";
import { HouseModel } from "./House.model";

const createHouseService =async (data:IHouse) : Promise<IHouse | any> => {
    const result = await HouseModel.create(data);
    return result;
}
const getSingleHouse = async(id : string) : Promise<IHouse | any> =>{
    const result = await HouseModel.findById({_id : id})
    return result
}
const getSingleUserHouse = async(email : string) : Promise<IHouse | any> =>{
    const result = await HouseModel.find({email});
    return result
}


export const HouseServices = {
    createHouseService,getSingleHouse,getSingleUserHouse
}