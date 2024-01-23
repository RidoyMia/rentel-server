import mongoose from "mongoose";
import app from "./app";

async function bootstrap() {
    try {
        await mongoose.connect('mongodb+srv://recomendation:recomendation@cluster0.o24jilb.mongodb.net/?retryWrites=true&w=majority')
        app.listen(800, () => {
            console.log(`Example app listening on port 800`)
          })
        console.log('connected')
    } catch (error) {
        
    }

}

bootstrap()