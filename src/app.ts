import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import config from './config'
import { registerRoutes } from './routes'

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))

registerRoutes(app)

export default app
