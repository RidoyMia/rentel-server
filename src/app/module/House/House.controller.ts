import express,{Request,Response,NextFunction} from "express"
import { HouseServices } from "./House.service";
const createHouseController = async(req:Request,res:Response,next: NextFunction) =>{
    try {
        const houseData = req.body;
        const result = await HouseServices.createHouseService(houseData);
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        
    }
}
const getSingleHouseController = async(req:Request,res:Response,next: NextFunction)=>{
    try {
        const id = req.params.id;
        const result = await HouseServices.getSingleHouse(id);
        res.status(200).send({
            data : true,
            result
        })
    } catch (error) {
        
    }
}

export const HouseController = {
    createHouseController,getSingleHouseController
}