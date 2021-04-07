import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { registerRoutes } from './routes'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))

registerRoutes(app)

export default app
