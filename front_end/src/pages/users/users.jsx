/** @format */

import React, { useEffect, useState, useRef } from 'react'
import Container from '../../components/container/container'
import Header from '../../components/header/header'
import logo from '../../anexos/logo_img.webp'
import Form from '../../components/form/form'
import Input from '../../components/input/input'
import Button from '../../components/button/button'
import Messages from '../../components/messages/message'
import Lista from '../../components/lista/lista'
import api from '../../components/api/api'
import styles from './Users.module.css'

export default function Users() {
	const [id, setId] = useState('')
	const [colaboradores, setColaboradores] = useState([])
	const [colaboradoresAtivos, setColaboradoresAtivos] = useState([])
	const [colaborador, setColaborador] = useState('')
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState(true)
	const [anexo, setAnexo] = useState('')
	const [message, setMessage] = useState('')
	const [listaErros, setListaErros] = useState('')
	const [tipoTela, setTipoTela] = useState(true)
	const inputName = useRef(null)

	function handleClear() {
		setId('')
		setColaborador('')
		carregarColaboradores()
		setColaboradoresAtivos([])
		setEmail('')
		setAnexo('')
		setStatus(true)
		setMessage('')
		setListaErros('')
		setTipoTela(true)
	}

	const pathAnexo = 'anexos/'
	const extensao = '.pdf'

	function createAnexo(colaborador) {
		if (colaborador) {
			setAnexo(
				`${pathAnexo}${colaborador
					.replaceAll(' ', '_')
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.toLowerCase()}${extensao}`
			)
		} else {
			setAnexo('')
		}
	}

	useEffect(() => {
		createAnexo(colaborador)
	}, [colaborador])

	async function carregarColaboradores() {
		const response = await api.get(`users`)
		setColaboradores(response.data)
	}

	useEffect(() => {
		carregarColaboradores()
	}, [])

	async function carregarColaboradoresAtivos() {
		const { data } = await api.get('users')
		const response = data.filter((a) => a.status === true)
		setColaboradoresAtivos(response)
	}

	async function handleOnIncluirColaborador(e) {
		e.preventDefault()
		if (tipoTela) {
			try {
				await api.post(`users`, {
					name: colaborador,
					email: email,
					status: status,
					anexo: anexo,
				})
				setMessage({
					type: 'success',
					message: 'Colaborador cadastrado com sucesso!',
				})
				setTimeout(() => {
					handleClear()
				}, 2000)
			} catch (error) {
				setMessage({
					type: 'error',
					message: error.response.data.error,
				})
				setTimeout(() => {
					handleClear()
				}, 2000)
			}
		} else {
			try {
				await api.put(`users`, {
					id: id,
					name: colaborador,
					email: email,
					status: status,
					anexo: anexo,
				})
				setMessage({
					type: 'alter',
					message: 'Colaborador alterado com sucesso!',
				})
				setTimeout(() => {
					handleClear()
				}, 2000)
			} catch (error) {
				setMessage({
					type: 'error',
					message: error.response.data.error,
				})
				setTimeout(() => {
					handleClear()
				}, 2000)
			}
		}
	}

	const headerColaboradores = [
		'Id',
		'Colaborador',
		'Email',
		'Anexo',
		'Status',
		'Ações',
	]

	async function handleEnviarEmail(e, lista_colaboradores) {
		e.preventDefault()
		let lista_erros = []
		try {
			if (!lista_colaboradores) {
				await carregarColaboradoresAtivos()

				for (let i in colaboradoresAtivos) {
					const response = await api.post('email', {
						name: colaboradoresAtivos[i].name,
						email: colaboradoresAtivos[i].email,
						anexo: colaboradoresAtivos[i].anexo,
						status: colaboradoresAtivos[i].status,
					})
					if (response.data.error) {
						lista_erros.push(response.data.error)
					}
				}
			} else {
				await api.post('email', {
					name: lista_colaboradores.name,
					email: lista_colaboradores.email,
					anexo: lista_colaboradores.anexo,
					status: lista_colaboradores.status,
				})
			}
			if (lista_erros.length) {
				setListaErros(lista_erros)
			} else {
				setMessage({
					type: 'success',
					message: 'Emails enviados com sucesso!',
				})
				setTimeout(() => {
					handleClear()
				}, 2000)
			}
			console.log(listaErros)
		} catch (error) {
			console.log({ error })

			setMessage({
				type: 'error',
				message: error.response.data.error,
			})
		}
	}

	async function handleDesativarColaborador({ id, status }) {
		try {
			await api.patch(`users`, {
				id,
				status,
			})
			setTimeout(() => {
				handleClear()
			}, 2000)
		} catch (error) {
			setMessage({
				type: 'error',
				message: error.response.data.error,
			})
		}
	}

	async function handleEditarColaborador(email) {
		try {
			const { data } = await api.get(`users/${email}`)
			setTipoTela(false)
			setId(data.id)
			setColaborador(data.name)
			setEmail(data.email)
			setStatus(data.status)
			setAnexo(data.anexo)
		} catch (error) {
			setMessage({
				type: 'error',
				message: error.response.data.error,
			})
		}
	}

	return (
		<Container
			width='100%'
			margin='2em auto'>
			<Header logo={logo} />
			<Form
				width='100%'
				margin='2em auto'
				gap='1em'
				border='1px solid black'
				borderRadius='0.5rem'
				padding='0.5em 0'>
				<div style={{ display: 'flex', width: '99%' }}>
					<Input
						nameLabel='Colaborador'
						name='User'
						placeholder='Digite o nome do colaborador'
						value={colaborador}
						handleOnChange={(e) => setColaborador(e.currentTarget.value)}
						ref={inputName}
						autoFocus={true}
					/>
					<Input
						nameLabel='Email'
						name='Email'
						placeholder='Digite o email do colaborador'
						value={email}
						type='email'
						handleOnChange={(e) => setEmail(e.currentTarget.value)}
					/>
					<Input
						nameLabel='Anexo'
						name='Anexo'
						value={anexo}
						placeholder=''
						type='text'
						disabled={true}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						width: '98%',
						margin: '0 auto',
						gap: '1em',
						padding: '0.5em',
					}}>
					<Button
						titleBtn='Incluir colaborador'
						nameBtn={tipoTela ? 'Incluir colaborador' : 'Alterar colaborador'}
						handleOnClick={(e) => handleOnIncluirColaborador(e)}
						width='100%'
						type='submit'
					/>

					<Button
						titleBtn='Enviar email'
						nameBtn='Enviar email'
						handleOnClick={(e) => handleEnviarEmail(e)}
						width='100%'
						type='button'
					/>
					<Button
						titleBtn='Limpar formulário'
						nameBtn='Limpar'
						handleOnClick={() => handleClear()}
						width='100%'
						type='button'
					/>
				</div>

				{message && <Messages message={message} />}
				{listaErros && (
					<Lista tipo='error'>
						{listaErros.map((m, index) => {
							return <li key={index}>{m}</li>
						})}
					</Lista>
				)}
			</Form>
			<div style={{ overflow: 'auto', width: '100%' }}>
				<table
					style={{ width: '100%', overflow: 'auto', maxHeight: '500px' }}
					className={styles.table}>
					<thead className={styles.thead}>
						<tr>
							{headerColaboradores.map((it, index) => {
								return it === 'Ações' ? (
									<th
										key={index}
										colSpan={3}>
										{it}
									</th>
								) : (
									<th key={index}>{it}</th>
								)
							})}
						</tr>
					</thead>
					<tbody>
						{colaboradores.map((item) => {
							return (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.anexo}</td>
									<td>{item.status ? 'Sim' : 'Não'}</td>
									<td>
										<Button
											titleBtn={
												item.status
													? `Desativar ${item.name}`
													: `Ativar ${item.name}`
											}
											nameBtn={item.status ? 'Desativar' : 'Ativar'}
											handleOnClick={() =>
												handleDesativarColaborador({
													id: item.id,
													status: item.status,
												})
											}
											width='100%'
											type='button'
										/>
									</td>
									<td>
										<Button
											titleBtn='Editar'
											nameBtn='Editar'
											handleOnClick={() => handleEditarColaborador(item.email)}
											width='100%'
											type='button'
										/>
									</td>
									<td>
										<Button
											titleBtn={
												item.status && `Enviar email para ${item.email}`
											}
											nameBtn='Enviar email'
											handleOnClick={(e) =>
												handleEnviarEmail(e, {
													nome: item.name,
													email: item.email,
													anexo: item.anexo,
													status: item.status,
												})
											}
											disabled={!item.status && true}
											width='100%'
											type='button'
										/>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</Container>
	)
}
