import { Router } from 'express'

import { createUserController } from './useCases/CreateUser'

const router = Router()

router.get('/', (req, res) => {
  return res.send(`${process.env.APP_NAME} ${process.env.APP_VERSION}`)
})

router.post('/users', (req, res) => {
  return createUserController.handle(req, res)
})

export { router }
