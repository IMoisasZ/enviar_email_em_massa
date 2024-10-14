import { Router } from 'express'
import EmailController from '../controller/email_controller.js'

const routes = Router()

routes.post('/', EmailController.funcSendEmail)

export default routes
