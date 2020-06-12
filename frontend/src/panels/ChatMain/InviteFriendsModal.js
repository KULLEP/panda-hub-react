import React, { useState, useEffect } from 'react';
import style from './Style.module.css';
import { GetListFriends } from './../FriendsList/_scripts';
import { AddNewUserInChat } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Link } from 'react-router-dom';
import ImageMy from './../../components/ImageMy/ImageMy';
import { Button } from 'semantic-ui-react';


const InviteFriendsModal = ({id_user}) => {


	const [popout, setPopout] = useState(<Loader/>);
	var participants = window.globalInfo.InfoChat.users;

	useEffect(() => {
		async function fetchRequest() {
			await new GetListFriends(id_user).get();
			setPopout(null);
		}
		fetchRequest();
	});


	const button_user_add = async (e) => {
		let user_id = e.target.dataset.user_id;
		let chat_id = window.globalInfo.InfoChat.id;
		e.target.parentElement.remove();
		await new AddNewUserInChat(chat_id, user_id).add();
	};



	return (
		<div className={ style.inviteUsers }>
		{
			popout !== null ? popout :
			<div> 
			{
				window.globalInfo.arrInfoFriends.map(e => {
					let r = participants.indexOf(e.id);
					return r === -1 ? 
					<div to={`/user/${e.id}`} className={ style.cardUser } >
					<div className={ style.img_block }>
					<Link to={`/user/${e.id}`} >
					<ImageMy propsUrl={e.id} propsType='user' />
					</Link>
					</div>
					<div className={ style.card_content }>
					<Link to={`/user/${e.id}`} >
					<span className='h5 text-dark' >{e.first_name} {e.last_name}</span>
					</Link>
					</div>
					<Button data-user_id={e.id} onClick={button_user_add} className={ style.button_user_add } basic color='green' content='Добавить' />
					</div>
					: null
				})
			}
			</div>	 
		}
		</div>	 
		)
}


export default InviteFriendsModal;
