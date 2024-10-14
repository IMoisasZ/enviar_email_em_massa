/** @format */

import React from 'react'
import { autoId } from '../../utils/uuid.utils'
import styles from './Input.module.css'

export default function Input({
	name,
	nameLabel = 'name label',
	type = 'text',
	id = autoId(),
	placeholder = 'describe placeholder',
	required = true,
	disabled = false,
	autoFocus = false,
	value = '',
	handleOnChange = null,
	width,
	ref,
}) {
	return (
		<div className={styles.containerInput}>
			<label htmlFor={name}>{nameLabel}</label>
			<input
				style={{ width }}
				name={name}
				type={type}
				id={id}
				placeholder={placeholder}
				required={required}
				disabled={disabled}
				autoFocus={autoFocus}
				value={value}
				onChange={handleOnChange}
				ref={ref}
			/>
		</div>
	)
}
