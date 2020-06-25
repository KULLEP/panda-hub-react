import React, { useState, useEffect } from 'react';
import BlockMeme from'./../../components/BlockMeme/BlockMeme';
import MyRedirect from './../../components/MyRedirect';
import { AddNewGame } from './_scripts';
import Loader from './../../components/Loader/Loader';
import CardAddMeme from './../../components/CardAddMeme/CardAddMeme';
import { Button, Header, Form, Modal } from 'semantic-ui-react';
import style from './Style.module.css';
import { goToGameListPage } from './../../_scripts/RedirectOnPage';

const Developer = () => {

	document.title = 'Разработчикам';

	const [popout, setPopout] = useState(<Loader/>);



	const submit = async () => {
		console.log('CREATE');
		var id_user = window.globalInfo.infoCurrentUser.id;

		let name = document.getElementById('app_dev_name').value;
		let description = document.getElementById('app_dev_description').value;
		let image = document.getElementById('app_dev_image').value;
		let options = document.getElementById('app_dev_options').value;
		let url_app = document.getElementById('app_dev_url_app').value;

		/* ДОБАВИТЬ */
		await new AddNewGame(id_user, name, description, image, options, url_app).add();

		/* ПЕРЕЙТИ НА СТРАНИЦУ СО СПИСКОМ ИГР */
		goToGameListPage();

	};



	return (
		<div className='w-100'>
		<MyRedirect/>
		

		<Modal className={ style.main_modal } trigger={<Button basic color='green' >Создать приложение</Button>}>
		<Modal.Header>Создать приложение</Modal.Header>
		<Modal.Content>

		<Modal.Description>

		<Form>

		<Form.Field>
		<label>Название</label>
		<input id='app_dev_name' placeholder='Название приложения' />
		</Form.Field>

		<Form.Field>
		<label>Описание</label>
		<input id='app_dev_description' placeholder='Описание приложения' />
		</Form.Field>

		<Form.Field>
		<label>Обложка</label>
		<input id='app_dev_image' placeholder='Ссылка на изображение' />
		</Form.Field>

		<Form.Field>
		<label>Настройки</label>
		<input id='app_dev_options' value='{
			"width": 960,
			"height": 600
		}' />
		</Form.Field>

		<Form.Field>
		<label>Ссылка</label>
		<input id='app_dev_url_app' placeholder='Ссылка на приложение' />
		</Form.Field>

		<Button className='float-right' onClick={submit} inverted color='blue' >Создать</Button>
		</Form>

		</Modal.Description>
		</Modal.Content>
		</Modal>



		</div>
		)
}
export default Developer;
