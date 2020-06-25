import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import FormCreateChat from './FormCreateChat';
import { GetListChats } from './_scripts';
import Loader from './../../components/Loader/Loader';
import ChatCard from './../../components/ChatCard/ChatCard';
import { Header, Segment, Modal, Button } from 'semantic-ui-react';
import style from './Style.module.css';

const ChatsList = () => {

	document.title = 'Списко конференций';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_chats_list = window.globalInfo.arrInfoChatsList;
	
	useEffect(() => {
		async function fetchRequest() {
			await new GetListChats().get();
			setPopout(null);
		}
		fetchRequest();
	}, []);

	return (

		<div>
		<Header as='h2' attached='top' className={ style.header }>

		<FormCreateChat/>

		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_chats_list.map(e => {	
				return (
					<ChatCard info={e} />
					)})
		}
		</Segment>
		</div>

		)

}

export default ChatsList;


