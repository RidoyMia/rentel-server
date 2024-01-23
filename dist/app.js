"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const User_route_1 = __importDefault(require("./app/module/User/User.route"));
const House_Route_1 = __importDefault(require("./app/module/House/House.Route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1/user', User_route_1.default);
app.use('/api/v1/house', House_Route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
