/** @format */

import { Router } from 'express'
import UserController from '../controller/user_controller.js'

const routes = Router()

routes.post('/', UserController.createUser)
routes.put('/', UserController.updateUser)
routes.delete('/:id', UserController.deleteUser)
routes.get('/', UserController.getAllUsers)
routes.get('/:email', UserController.getUserByEmail)
routes.patch('/', UserController.disableEnableUser)

export default routes
