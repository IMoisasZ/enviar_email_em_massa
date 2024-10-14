import EmailService from '../service/email_service.js'

async function funcSendEmail(req, res, next) {
	try {
		const lista_users = req.body
		const response = await EmailService.funcSendEmail(lista_users)

		if (response.error) {
			res.status(200).json({ error: response.error })
		}

		res.status(200).json({
			msg: 'Email enviado com sucesso!',
		})
	} catch (error) {
		next(error)
	}
}

export default {
	funcSendEmail,
}
