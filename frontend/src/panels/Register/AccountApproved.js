import React from 'react';
import { Card, Button, Form } from 'semantic-ui-react';
import { AccountApprovedClass } from './_scripts.js';


const AccountApproved = () => {

	document.title = 'Подтверждение аккаунта';

	const submit = async () => {
		let code = document.getElementById('code').value;
		let email = localStorage.getItem('email_access');
		await new AccountApprovedClass(email, code).approved();
	};

	return (
		<Card>

		<Card.Content>

		<Form className='bg-white'>

		<Form.Field>
		<label>Код подтверждения</label>
		<input id='code' type="text"  autocomplete="off" required placeholder='Код' />
		</Form.Field>

		<div align='center'>
		<Button onClick={submit} inverted color='green' >Подтвердить</Button>
		</div>

		</Form>

		</Card.Content>
		</Card>
		)
}
export default AccountApproved;
