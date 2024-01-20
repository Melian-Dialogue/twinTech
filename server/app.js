import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import userRouter from './routes/AuthRoute.js'
import { connectToDB } from './config/db.js'
import paymentRouter from './routes/PaymentRoute.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['*','http://127.0.0.1:3000', 'http://localhost:3000', 'http://localhost:3100', 'http://localhost:4000']
}))
app.use(express.static('../front'));
app.use(userRouter)
app.use(paymentRouter)

connectToDB()

app.listen(4000, () => console.log('server listening on http://localhost:4000'))