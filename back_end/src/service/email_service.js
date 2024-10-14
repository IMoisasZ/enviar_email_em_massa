import sendEmail from '../util/send_email.js'

async function funcSendEmail(lista_users) {
	return await sendEmail(lista_users)
}

export default {
	funcSendEmail,
}
