import express from "express"
import { HouseController } from "./House.controller";
const HouseRouter = express.Router();
HouseRouter.post('/create',HouseController.createHouseController)
HouseRouter.get('/:id',HouseController.getSingleHouseController)
HouseRouter.get('/user/:email',HouseController.getSingleUserHouseController)
HouseRouter.get('/all/house',HouseController.getAlluserHouseController)
HouseRouter.delete('/delete/:id',HouseController.deletedSingleHouseController)


export default HouseRouter;