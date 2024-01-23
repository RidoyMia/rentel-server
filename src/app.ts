import express, { Application } from "express"
import cors from "cors"
import userRouter from "./app/module/User/User.route"
import HouseRouter from "./app/module/House/House.Route"

const app :Application = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use('/api/v1/user', userRouter)
app.use('/api/v1/house', HouseRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
 

  export default app;