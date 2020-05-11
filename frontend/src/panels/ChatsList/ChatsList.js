import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import FormCreateChat from './FormCreateChat';
import { GetListChats } from './_scripts';
import Loader from './../../components/Loader/Loader';
import ChatCard from './../../components/ChatCard/ChatCard';
import { Header, Segment, Modal, Button } from 'semantic-ui-react';
import style from './Style.module.css';

const ChatsList = () => {

	document.title = 'Списко чатов';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_chats_list = window.globalInfo.arrInfoChatsList;
	

	useEffect(() => {
		async function fetchRequest() {
			await new GetListChats().get();
			setPopout(null);
			console.log(window.globalInfo.arrInfoChatsList);
		}
		fetchRequest();
	}, []);



	return (
		<div className='w-100'>
		<Header as='h2' attached='top'>
	 
		<Modal
		className={ style.modal }
		trigger={<Button color='green' className={ style.button_create }>Создать чат</Button>}
		header='Новый чат!'
		content={<FormCreateChat/>}
		actions={['Отмена']}
		/>
		 
		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_chats_list.map(e => {
				return (
					<ChatCard info={e} />
					)}
				)
		}
		</Segment>
		</div>
		)

}

export default ChatsList;

