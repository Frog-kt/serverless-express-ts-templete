import { Router } from 'express'
import { example } from '../controllers'

const router = Router()

router.get('/example', example)

export default router
