/** @format */

import express from 'express'
import cors from 'cors'
import { existsSync, writeFileSync } from 'fs'
import UserRoutes from './src/routes/user_route.js'
import EmailRoutes from './src/routes/email_route.js'

// export const pathDatabaseEmail = 'src/databse/todolist.json'
export const pathDatabaseUsers = 'src/db/users_db.json'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', UserRoutes)
app.use('/email', EmailRoutes)

if (!existsSync(pathDatabaseUsers)) {
	writeFileSync(pathDatabaseUsers, '[]', 'utf8')
}

export default app
