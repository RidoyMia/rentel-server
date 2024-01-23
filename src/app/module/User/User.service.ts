import { ILogin, IUser } from "./User.interface";
import { UserModel } from "./User.model";

const createUser =async (data : IUser) : Promise<IUser | any> =>{
  const result = await UserModel.create(data);
  return result
}

const loginUser = async(userData :ILogin) : Promise<IUser | any> =>{
    const result = await UserModel.find({email : userData.email, password : userData.password});
    return result;
}


export const UserServices = {
    createUser,loginUser
}