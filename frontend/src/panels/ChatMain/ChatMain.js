import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MyRedirect from './../../components/MyRedirect';
import { GetMessages, AccessChat, AddMessages, GetInfoChat } from './_scripts';
import Loader from './../../components/Loader/Loader';
import MessageBlock from './../../components/MessageBlock/MessageBlock';
import { goToMainPage } from './../../_scripts/RedirectOnPage';
import { Comment, Header, Card, Form, Button } from 'semantic-ui-react';
import { HashRouter, Redirect } from 'react-router-dom';
import App from './../../App';
import AdminRightMenu from './AdminRightMenu';
import style from './Style.module.css';

const ChatMain = ({match}) => {

	const [popout, setPopout] = useState(<Loader/>);

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
	}, []);



	const addMessage = async () => {
		let message = document.getElementById('form_message').value;
		let investment = null;
		let link = '/chat/' + id_chat;
		if (message.length > 1) {
			await new AddMessages(id_chat, id_user, message, investment).add();
			await new GetMessages(id_chat).get();
			ReactDOM.render(
				<HashRouter>
				{
					window.globalInfo.arrMessages.map(e => (
						<MessageBlock info={e} />
						))
				}
				</HashRouter>
				,document.getElementById('comments_block')
				);
		}

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
			<Form.TextArea placeholder='Сообщение' id='form_message' />
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
