import express from "express"
import { HouseController } from "./House.controller";
const HouseRouter = express.Router();
HouseRouter.post('/create',HouseController.createHouseController)
HouseRouter.get('/:id',HouseController.getSingleHouseController)


export default HouseRouter;