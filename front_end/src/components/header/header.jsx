import React from 'react'
import styles from './Header.module.css'

export default function Header({
	logo,
	title = 'Informe o nome da sua empresa e o tipo de ',
}) {
	return (
		<header className={styles.header}>
			<div className={styles.div_logo}>
				<img
					src={logo}
					alt='Logo injetaq'
					width='100%'
				/>
			</div>
			<div className={styles.div_h1}>
				<h1 className={styles.h1}>{title}</h1>
			</div>
		</header>
	)
}
