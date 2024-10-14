/** @format */

import { writeFileSync, readFileSync } from 'fs'
import { pathDatabaseUsers } from '../../app.js'

async function createUser(user) {
	const newUser = {
		name: user.name,
		email: user.email,
		anexo: user.anexo,
		status: user.status,
		id: user.id,
	}
	try {
		// Verifiy if exist added user
		if (getUserByUsername(user.name) !== false) {
			return false
		}
		// add user

		if (getAllUsers().length === 0) {
			writeFileSync(pathDatabaseUsers, JSON.stringify([newUser]), 'utf8')
		} else {
			writeFileSync(
				pathDatabaseUsers,
				JSON.stringify([...getAllUsers(), newUser]),
				'utf8'
			)
		}
		classificarDb(getAllUsers())
		return newUser
	} catch (error) {
		throw error
	}
}

async function updateUser(user) {
	try {
		// variable to save allusers
		const users = []

		// variable to save the user will be modify
		const userModify = []

		//iteration in allUsers to separeted the user will be modifify
		getAllUsers().forEach((u) => {
			if (u.id !== user.id) {
				users.push(u)
			} else {
				userModify.push(u)
			}
		})

		// // verify if username is beeing modification
		// if (userModify[0].name != user.name) {
		// 	throw new Error(`O usuário não pode ser modificado`)
		// }

		// including the user modify in the allusers saved
		users.push(user)

		// doind the adction the users
		writeFileSync(pathDatabaseUsers, JSON.stringify(users), 'utf8')
		classificarDb(getAllUsers())
		return user
	} catch (error) {
		throw error
	}
}

function getAllUsers() {
	try {
		return JSON.parse(readFileSync(pathDatabaseUsers, 'utf8'))
	} catch (error) {
		throw error
	}
}

function deleteUser(userId) {
	const users = []
	const nameUserDeleted = []

	const allUsers = getAllUsers()

	if (allUsers.length === 0) {
		throw new Error(`ID inexistente`)
	}

	allUsers.forEach((u) => {
		if (u.id !== userId) {
			users.push(u)
		} else {
			nameUserDeleted.push({ name: u.name })
		}
	})

	writeFileSync(pathDatabaseUsers, JSON.stringify(users), 'utf8')
	classificarDb(getAllUsers)
	return {
		message: `Usuário ${nameUserDeleted[0].name} foi deletado com sucesso!`,
	}
}

function getUserByUsername(username) {
	return getAllUsers().find((user) => user.name === username) || false
}

function getUserByEmail(email) {
	return (
		getAllUsers().find((user) => user.email === email) || {
			message: `Não encontrado um usuário com o email ${email}`,
		}
	)
}

function disableEnableUser(user) {
	try {
		// variable to save allusers
		const users = []

		// variable to save the user will be modify
		const userModify = []

		//iteration in allUsers to separeted the user will be modifify
		const allUsers = getAllUsers()
		allUsers.forEach((u) => {
			if (u.id !== user.id) {
				users.push(u)
			} else {
				userModify.push(u)
			}
		})

		// including the user modify in the allusers saved
		userModify[0].status = user.status
		users.push(...userModify)

		// doind the adction the users
		writeFileSync(pathDatabaseUsers, JSON.stringify(users), 'utf8')
		classificarDb(getAllUsers())
		return userModify
	} catch (error) {
		throw error
	}
}

function classificarDb(db) {
	db.sort((a, b) => {
		const nameA = a.name
		const nameB = b.name

		if (nameA < nameB) {
			return -1
		}
		if (nameA > nameB) {
			return 1
		}

		return 0
	})
	writeFileSync(pathDatabaseUsers, JSON.stringify(db), 'utf8')
}

export default {
	createUser,
	updateUser,
	getUserByUsername,
	getAllUsers,
	deleteUser,
	getUserByEmail,
	disableEnableUser,
}
