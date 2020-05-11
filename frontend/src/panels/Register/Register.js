import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, Form } from 'semantic-ui-react';
import { RegisterClass } from './_scripts.js';


const Register = () => {

	document.title = 'Регистрация';

	const submit = async () => {
		let first_name = document.getElementById('first_name').value;
		let last_name = document.getElementById('last_name').value;
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		await new RegisterClass(first_name, last_name, email, password).validation();
	};

	return (
		<Card>

		<Card.Content>
		<Button.Group>
		<NavLink to='/auth'>
		<Button onClick={submit}>Авторизация</Button>
		</NavLink>
		<Button.Or text='|||' />
		<NavLink to='/register'>
		<Button positive >Регистрация</Button>
		</NavLink>
		</Button.Group>

		<hr/>

		<Form className='bg-white'>

		<Form.Field>
		<label>Имя</label>
		<input id='first_name' type="text"  autocomplete="off" required placeholder='Имя' />
		</Form.Field>

		<Form.Field>
		<label>Фамилия</label>
		<input id='last_name' type="text" autocomplete="off" placeholder='Фамилия' />
		</Form.Field>

		<Form.Field>
		<label>Mail</label>
		<input id='email' type="email" autocomplete="off" required placeholder='Mail' />
		</Form.Field>

		<Form.Field>
		<label>Пароль</label>
		<input id='password' type="password" autocomplete="off" required placeholder='Пароль' />
		</Form.Field>

		<div align='center'>
		<Button onClick={submit} inverted color='green' >Регистрация</Button>
		</div>

		</Form>

		</Card.Content>
		</Card>
		)
}
export default Register;
