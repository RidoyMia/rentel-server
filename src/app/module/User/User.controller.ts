import express,{Request,Response,NextFunction} from "express"
import { ILogin, IUser } from "./User.interface"
import { UserServices } from "./User.service";
import { config } from "../../../../config";
import jwt, { Secret } from "jsonwebtoken"


const createUserController = async(req:Request,res:Response,next:NextFunction) : Promise<IUser | any> =>{
    try {
        const userData : IUser = req.body;
        console.log(userData )
        const result = await UserServices.createUser(userData);
       
        // const token = await jwt.sign()
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong',
            data : false
        })
    }
}


const loginUserController = async(req:Request,res:Response,next:NextFunction) : Promise<IUser | any> =>{
    try {
        const userData : ILogin = req.body;
        const result = await UserServices.loginUser(userData);
        
        const authentikUserInfo = {
            //@ts-ignore
            email: result ? result[0]?.email : undefined,
            //@ts-ignore
            role: result ? result[0]?.role : undefined
          };
        const token = await jwt.sign( authentikUserInfo,config.ACCESSTOKEN as Secret ,)
        console.log(token)
        res.status(200).send({
            data : true,
            result,
            token 
        })
    } catch (error) {
        res.status(400).send({
            message : 'something went wrong',
            data : false
        })
    }
}


export const UserController = {
    createUserController,loginUserController
}