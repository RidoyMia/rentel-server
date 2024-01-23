import mongoose, { Schema } from "mongoose";
import { IUser } from "./User.interface";

const userScheema = new Schema<IUser>({
    fullname : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['House_Owner' , 'House_Rente'],
        required : true
    },
    phone : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

export const UserModel = mongoose.model('users', userScheema)