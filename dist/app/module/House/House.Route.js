"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const House_controller_1 = require("./House.controller");
const HouseRouter = express_1.default.Router();
HouseRouter.post('/create', House_controller_1.HouseController.createHouseController);
HouseRouter.get('/:id', House_controller_1.HouseController.getSingleHouseController);
HouseRouter.get('/user/:email', House_controller_1.HouseController.getSingleUserHouseController);
HouseRouter.get('/all/house', House_controller_1.HouseController.getAlluserHouseController);
exports.default = HouseRouter;
