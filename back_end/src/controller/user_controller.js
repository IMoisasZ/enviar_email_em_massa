/** @format */

import UserService from '../service/user_service.js'

async function createUser(req, res, next) {
	try {
		const user = req.body
		console.log(user)

		if (!user.name || !user.email) {
			res.status(400).json({ error: 'Todos os campos são obrigatórios!' })
		}
		const responseController = await UserService.createUser(user)
		if (responseController) {
			res.send(responseController)
		} else {
			res.status(400).json({ error: `Colaborador já cadastrado` })
		}
	} catch (error) {
		next(error)
	}
}

async function updateUser(req, res, next) {
	try {
		const user = req.body
		const responseController = await UserService.updateUser(user)
		res.send(responseController)
	} catch (error) {
		next(error)
	}
}

async function deleteUser(req, res, next) {
	try {
		res.send(await UserService.deleteUser(req.params.id))
	} catch (error) {
		next(error)
	}
}

async function getAllUsers(req, res, next) {
	try {
		res.send(await UserService.getAllUsers())
	} catch (error) {
		next(error)
	}
}

async function getUserByEmail(req, res, next) {
	try {
		res.send(await UserService.getUserByEmail(req.params.email))
	} catch (error) {
		next(error)
	}
}

async function disableEnableUser(req, res, next) {
	try {
		const user = req.body
		res.send(await UserService.disableEnableUser(user))
	} catch (error) {
		next(error)
	}
}

export default {
	createUser,
	updateUser,
	deleteUser,
	getAllUsers,
	getUserByEmail,
	disableEnableUser,
}
