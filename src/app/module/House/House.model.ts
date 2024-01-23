import mongoose, { Schema } from "mongoose";
import { IHouse } from "./House.interface";

const houseScheema = new Schema<IHouse>({
    address:{
        type : String,
        required : true
    },
availability:{
    type : String,
    required : true
},
bathrooms: {
    type : Number,
    required : true
},
bedrooms: {
    type : Number,
    required : true
},
city: {
    type : String,
    required : true
},
descriptions: {
    type : String,
    required : true
},
email: {
    type : String,
    required : true
},
name: {
    type : String,
    required : true
},
phone: {
    type : String,
    required : true
},
picture: {
    type : String,
    required : true
},
rent:{
    type : Number,
    required : true
},
roomSize: {
    type : Number,
    required : true
}
})


export const HouseModel = mongoose.model("House",houseScheema)