import React, { useState, useEffect } from 'react';
import style from './Style.module.css';
import { GetListFriends } from './../FriendsList/_scripts';
import Loader from './../../components/Loader/Loader';

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


	return (

		<div className={ style.inviteUsers }>
		{
			popout !== null ? popout :
			<div> 
			{
				window.globalInfo.arrInfoFriends.map(e => {
					let r = participants.indexOf(e.id);
					return r === -1 ? <p>{e.id}</p> : null
				})
			}
			</div>	 
		}
		</div>	 
		)
}


export default InviteFriendsModal;
