
import express from "express"
import { UserController } from "./User.controller"

const userRouter = express.Router()
userRouter.post('/create',UserController.createUserController)
userRouter.post('/login',UserController.loginUserController)

export default userRouter;