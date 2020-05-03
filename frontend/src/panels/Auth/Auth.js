import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, Form } from 'semantic-ui-react';
import { AuthClass } from './_scripts.js';


const Auth = () => {

	const submit = async (e) => {
		let email = document.getElementById('email').value;
		let password = document.getElementById('password').value;
		await new AuthClass(email, password).validation();

	};

	return (
		<Card>

		<Card.Content>
		<Button.Group>
		<NavLink to='/auth'>
		<Button onClick={submit} positive>Авторизация</Button>
		</NavLink>
		<Button.Or text='|||' />
		<NavLink to='/register'>
		<Button>Регистрация</Button>
		</NavLink>
		</Button.Group>

		<hr/>

		<Form className='bg-white'>

		<Form.Field>
		<label>Mail</label>
		<input id='email' type="email" required placeholder='Mail' />
		</Form.Field>

		<Form.Field>
		<label>Пароль</label>
		<input id='password' type="password" required placeholder='Пароль' />
		</Form.Field>

		<div align='center'>
		<Button onClick={submit} inverted color='green' >Войти</Button>
		</div>

		<br/>
		<NavLink className='float-right' to='account_recovery'>
		<span>Восстановить аккаунт</span>
		</NavLink>

		</Form>
		</Card.Content>
		</Card>
		)
}
export default Auth;
