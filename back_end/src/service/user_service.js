/** @format */

import UserRepository from '../repository/user_repository.js'
import createId from '../util/id_util.js'

async function createUser(user) {
	user.id = await createId()
	user.anexo = `anexos/${user.name.replaceAll(' ', '_').toLowerCase()}.pdf`
	return UserRepository.createUser(user)
}

async function updateUser(user) {
	user.anexo = `anexos/${user.name.replaceAll(' ', '_').toLowerCase()}.pdf`
	return UserRepository.updateUser(user)
}

async function deleteUser(userId) {
	console.log(userId)

	return UserRepository.deleteUser(userId)
}

async function getAllUsers() {
	return UserRepository.getAllUsers()
}

async function getUserByEmail(email) {
	return UserRepository.getUserByEmail(email)
}

async function disableEnableUser(user) {
	if (user.status) {
		user.status = false
	} else {
		user.status = true
	}

	return UserRepository.disableEnableUser(user)
}

export default {
	createUser,
	updateUser,
	deleteUser,
	getAllUsers,
	getUserByEmail,
	disableEnableUser,
}
