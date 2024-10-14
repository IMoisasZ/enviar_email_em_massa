/** @format */

import React from 'react'

export default function Form({
	children,
	display,
	margin,
	gap,
	width,
	border,
	borderRadius,
	padding,
}) {
	return (
		<form
			style={{ display, margin, gap, width, border, borderRadius, padding }}>
			{children}
		</form>
	)
}
