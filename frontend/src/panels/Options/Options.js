import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, Form } from 'semantic-ui-react';
import { EditOptions, EditOptionsLeftMenu, SaveImage } from './_scripts.js';
import { GetInfoCurrentUser } from './../../_scripts/ActionsWithUser';
import Loader from './../../components/Loader/Loader';


const Options = () => {

	document.title = 'Настройки';

	const [popout, setPopout] = useState(<Loader/>);
	let email = localStorage.getItem('email');
	let password = localStorage.getItem('password');
	let info = window.globalInfo.infoCurrentUser;
	var id_user = window.globalInfo.infoCurrentUser.id;

	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoCurrentUser(email, password).getInfo();
			setPopout(null);      
		}
		fetchRequest();
	}, []);





	const submit = async () => {
		let first_name = document.getElementById('first_name').value;
		let last_name = document.getElementById('last_name').value;
		let nickname = document.getElementById('nickname').value;
		let country = document.getElementById('country').value;
		let status = document.getElementById('status').value;	 
		let city = document.getElementById('city').value;
		let age = document.getElementById('age').value;
		let sex = document.getElementById('sex').value;
		if(first_name !== '' && last_name !== '') {
			await new EditOptions(id_user, first_name, last_name, nickname, country,  status, city, age, sex).edit();
		}
	};


	const loadImage = async () => {
		let image = document.getElementById('image').files[0];
		await new SaveImage(image).save();
	};

	return (

		<Card>
		{
			popout !== null ? popout :
			<Card.Content>

			<div className='text-center'>
			<Button.Group>
			<NavLink to='/options'>
			<Button positive>Основные</Button>
			</NavLink>
			<Button.Or text='|||' />
			<NavLink to='/options_left_menu'>
			<Button>Меню</Button>
			</NavLink>
			</Button.Group>
			</div>

			<hr/>


			<Form className='bg-white'>


			<Form.Field>
			<label>Фото</label>
			<input id='image' type="file" />
			<button onClick={loadImage}>OK</button>
			</Form.Field>

			<Form.Field>
			<label>Имя</label>
			<input id='first_name' type="text" defaultValue={info.first_name} required maxLength="100" />
			</Form.Field>


			<Form.Field>
			<label>Фамилия</label>
			<input id='last_name' type="text" defaultValue={info.last_name} required maxLength="100" />
			</Form.Field>


			<Form.Field>
			<label>Прозвище</label>
			<input id='nickname' type="text" defaultValue={info.nickname} maxLength="100" />
			</Form.Field>


			<Form.Field>
			<label>Статус</label>
			<input id='status' type="text" defaultValue={info.status} maxLength="500" />
			</Form.Field>


			<Form.Field>
			<label>Страна</label>
			<input id='country' type="text" defaultValue={info.city} maxLength="100" />
			</Form.Field>


			<Form.Field>
			<label>Город</label>
			<input id='city' type="text" defaultValue={info.city} maxLength="100" />
			</Form.Field>


			<Form.Field>
			<label>Возраст</label>
			<input id='age' type="number" defaultValue={info.age} maxLength="5" />
			</Form.Field>


			<Form.Field>
			<label>Пол</label>
			<input id='sex' type="text" defaultValue={info.sex} maxLength="100" />
			</Form.Field>



			<div align='center'>
			<Button onClick={submit} inverted color='blue' >Сохранить</Button>
			</div>



			</Form>
			</Card.Content>
		}
		</Card>

		)
}
export default Options;
