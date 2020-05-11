import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Redirect } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import { CreateNewChats } from './_scripts';
import style from './Style.module.css';
import App from './../../App';


const FormCreateChat = () => {


	const submit = async () => {
		let name_chat = document.getElementById('name_chat_input').value;
		await new CreateNewChats(name_chat).create();
		ReactDOM.render(
			<HashRouter>
			<Redirect from='/' to='/chats_list'/>
			<App />
			</HashRouter>
			,document.getElementById('root')
			);
	}


	return (
		<Form className={ style.form }>
		<Form.Field>
		<label>Название</label>
		<input placeholder='Название чата' id='name_chat_input' />
		</Form.Field>
		<Form.Field>
		<label>Фото</label>
		<input type='file' className="form-control-file" />
		</Form.Field>
		<Button onClick={submit} type='submit' color='green'>Создать</Button>
		</Form>
		)

}

export default FormCreateChat;

