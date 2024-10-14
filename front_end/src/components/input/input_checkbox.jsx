/** @format */

import React from 'react'
import { autoId } from '../../utils/uuid.utils'
import styles from './Input.module.css'

export default function InputcheckBox({
	name,
	checked,
	nameLabel = 'name label',
	id = autoId(),
	required = true,
	disabled = false,
	autoFocus = false,
	value = '',
	handleOnChange = null,
	width,
}) {
	return (
		<div className={(styles.containerInput, { width })}>
			<label htmlFor={name}>{nameLabel}</label>
			<input
				style={{ width, cursor: 'pointer' }}
				name={name}
				checked={checked}
				type='checkbox'
				id={id}
				required={required}
				disabled={disabled}
				autoFocus={autoFocus}
				value={value}
				onChange={handleOnChange}
			/>
		</div>
	)
}
