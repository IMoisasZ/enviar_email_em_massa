/** @format */

import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
	host: process.env.HOST,
	port: process.env.PORT_EMAIL,
	secure: process.env.SECURE,
	auth: {
		user: process.env.USER,
		pass: process.env.PASS,
	},
	tls: {
		rejectUnauthorized: false,
	},
})

async function main(nome, to, anexo) {
	// send mail with defined transport object
	let lista_erros = {}
	try {
		const name = process.env.NAME
		const info = await transporter.sendMail({
			from: name & `<${process.env.USER}>`, // sender address
			to: to, // list of receivers
			subject: 'Demonstrativo de pagamento', // Subject line
			text: `Segue o demonstrativo de pagamento do mês`, // plain text body
			html: `<b>Segue o demonstrativo de pagamento do mês</b>`, // html body
			attachments: [
				{
					filename: nome,
					path: anexo,
				},
			],
		})

		console.log('Message sent: %s', info.messageId)
		console.log({ info })
	} catch (error) {
		console.log({ error })
		lista_erros = { error: `Email para ${to} não foi enviado!` }
	}
	return lista_erros

	// Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

async function sendEmail(lista_users) {
	const lista = []
	lista.push(lista_users)

	let lista_entrega = ''

	for (let i in lista) {
		if (lista[i].status) {
			lista_entrega = await main(
				lista[i].nome,
				lista[i].email,
				lista[i].anexo,
				lista_entrega
			)
		}
	}
	console.log(lista_entrega)
	return lista_entrega
}

export default sendEmail
