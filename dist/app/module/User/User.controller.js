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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_service_1 = require("./User.service");
const config_1 = require("../../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        console.log(userData);
        const result = yield User_service_1.UserServices.createUser(userData);
        // const token = await jwt.sign()
        res.status(200).send({
            data: true,
            result
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong',
            data: false
        });
    }
});
const loginUserController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const userData = req.body;
        const result = yield User_service_1.UserServices.loginUser(userData);
        const authentikUserInfo = {
            //@ts-ignore
            email: result ? (_a = result[0]) === null || _a === void 0 ? void 0 : _a.email : undefined,
            //@ts-ignore
            role: result ? (_b = result[0]) === null || _b === void 0 ? void 0 : _b.role : undefined
        };
        const token = yield jsonwebtoken_1.default.sign(authentikUserInfo, config_1.config.ACCESSTOKEN);
        console.log(token);
        res.status(200).send({
            data: true,
            result,
            token
        });
    }
    catch (error) {
        res.status(400).send({
            message: 'something went wrong',
            data: false
        });
    }
});
exports.UserController = {
    createUserController, loginUserController
};
