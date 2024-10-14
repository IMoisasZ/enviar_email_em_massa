/** @format */

import React from 'react'

export default function Container({ children, width, margin }) {
	return (
		<div style={{ width, margin, boxSizing: 'border-box' }}>{children}</div>
	)
}
