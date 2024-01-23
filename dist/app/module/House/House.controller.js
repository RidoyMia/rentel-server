"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseController = void 0;
const House_service_1 = require("./House.service");
const createHouseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const houseData = req.body;
        const result = yield House_service_1.HouseServices.createHouseService(houseData);
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
    }
});
const getSingleHouseController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield House_service_1.HouseServices.getSingleHouse(id);
        res.status(200).send({
            data: true,
            toi: "ami"
        });
    }
    catch (error) {
    }
});
exports.HouseController = {
    createHouseController, getSingleHouseController
};
