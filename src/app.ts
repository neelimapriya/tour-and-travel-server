import express, { Request, Response } from 'express'
import userRouter from './app/module/user/user.route'
const app = express()

app.use(express.json())

app.use("/api/user",userRouter)







app.get('/', (req:Request, res:Response) => {
  res.send('tour and travel server is running 🔥')
})


export default app;