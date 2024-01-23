import dotenv from "dotenv"
import path from "path"

dotenv.config({path : path.join(process.cwd(),'.env')})


export const  config  = {
   
   ACCESSTOKEN : process.env.token
   
}