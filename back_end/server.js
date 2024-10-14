/** @format */

import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT_SERVICE

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
