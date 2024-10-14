import React from 'react'
import styles from '../messages/Messages.module.css'

export default function Lista({ children, tipo }) {
	return (
		<ul
			className={
				tipo === 'error'
					? styles.error
					: tipo.type === 'success'
					? styles.success
					: tipo.type === 'alter'
					? styles.alter
					: ''
			}>
			{children}
		</ul>
	)
}
