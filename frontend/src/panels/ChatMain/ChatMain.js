import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MyRedirect from './../../components/MyRedirect';
import { GetMessages, AccessChat, GetInfoChat } from './_scripts';
import Loader from './../../components/Loader/Loader';
import MessageBlock from './../../components/MessageBlock/MessageBlock';
import { goToMainPage } from './../../_scripts/RedirectOnPage';
import { Comment, Header, Card, Form, Button } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';
import AdminRightMenu from './AdminRightMenu';
import style from './Style.module.css';
import openSocket from 'socket.io-client';
import ReactDOMServer from 'react-dom/server';


const ChatMain = ({match}) => {

	const [popout, setPopout] = useState(<Loader/>);


	const socket = openSocket('http://localhost:8000');


	const id_chat = match.params.number;

	var arrMessages = window.globalInfo.arrMessages;
	var id_user = window.globalInfo.infoCurrentUser.id;

	useEffect(() => {
		async function fetchRequest() {
			let access = await new AccessChat(id_chat).access();
			if(access !== '1') {
				alert('Нет доступа к чату');
				goToMainPage();
			} else {
				await new GetInfoChat(id_chat).get();
				await new GetMessages(id_chat).get();	 
				let r = await window.globalInfo.InfoChat.admins.indexOf(id_user);
				window.globalInfo.chat_is_admin = ( r >= 0 ) ? 1 : 0;
				setPopout(null);
				window.scrollTo(0, document.body.offsetHeight);
			}
		}
		fetchRequest();
	});




	useEffect(() => {
		let rotationInterval = setInterval(() => {
			let user_writing;
			let text_input_value = document.getElementById('form_message').value;
			let first_name = window.globalInfo.infoCurrentUser.first_name;
			let last_name = window.globalInfo.infoCurrentUser.last_name;
			if (text_input_value) {
				user_writing = 'Пишет - ' + first_name + ' ' + last_name;
			}  else {
				user_writing = '';
			}


			socket.emit('who_writes', {
				user_writing: user_writing
			});


			ReactDOM.render(<div className=' ml-5'>{window.globalInfo.listOfWriters?.info?.user_writing}</div>,document.getElementById('listOfWriters'));

		}, 2000)

		return () => {
			clearInterval(rotationInterval);
		}
	})


	const addMessage = async () => {
		let message = document.getElementById('form_message').value;
		let investment = null;
		let id_user = window.globalInfo.infoCurrentUser.id;
		let first_name = window.globalInfo.infoCurrentUser.first_name;
		let last_name = window.globalInfo.infoCurrentUser.last_name;
		let date = 'Сейчас';

		socket.emit('add_new_message', {
			id_chat: id_chat,
			id_user: id_user,
			first_name: first_name,
			last_name: last_name,
			date: date,
			text: message
		});


	};


	return (
		<div>
		<MyRedirect/>
		{
			popout !== null ? popout : 
			<Card className={ style.cardContent }>
			<Comment.Group>
			<Header as='h3' dividing>Чат</Header>	
			<div id='comments_block'>
			{
				arrMessages.map(e => (
					<MessageBlock info={e} />
					))
			}
			</div>
			<Form reply>
			<div id='listOfWriters'></div>
			<Form.TextArea className="mt-3" placeholder='Сообщение' id='form_message' />
			<Button onClick={addMessage} content='Отправить' labelPosition='left' icon='edit' primary />
			</Form>

			</Comment.Group>
			</Card>	 
		}

		{
			window.globalInfo.chat_is_admin === 1 ?
			<AdminRightMenu id_chat={id_chat} id_user={id_user} />	 
			: null
		}
		</div>
		)
}


export default ChatMain;
