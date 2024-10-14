/** @format */
import React from 'react'
import styles from './Table.module.css'
export default function Table({
	header,
	children,
	numCol = 2,
	margin,
	height,
	title = '',
}) {
	return (
		<div
			className={styles.container}
			style={{ margin, height }}>
			<Table
				striped
				bordered
				hover
				className={styles.table_container}>
				{children}
			</Table>
		</div>
	)
}
