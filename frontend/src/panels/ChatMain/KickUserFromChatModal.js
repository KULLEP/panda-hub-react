import React, { useState, useEffect } from 'react';
import style from './Style.module.css';
import { GetListParticipants } from './_scripts';
import Loader from './../../components/Loader/Loader';

const KickUserFromChatModal = ({id_chat}) => {


	const [popout, setPopout] = useState(<Loader/>);
 

	useEffect(() => {
		async function fetchRequest() {
			let arr_users = await new GetListParticipants(id_chat).get();
			window.arr_users = JSON.parse(arr_users);
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
				window.arr_users.map(e => {
					console.log(window.arr_users);
					return <p> {e.id} </p>
				})
			}
			</div>	 
		}
		</div>	 
		)
}


export default KickUserFromChatModal;
