import { Express } from 'express'
import example from './example.route'

export function registerRoutes(app: Express) {
  app.use('/', example)
}
