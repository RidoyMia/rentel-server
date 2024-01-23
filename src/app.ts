import express, { Application } from "express"
import cors from "cors"
import userRouter from "./app/module/User/User.route"

const app :Application = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use('/api/v1/user', userRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
 

  export default app;