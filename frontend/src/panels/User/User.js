import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetInfoUser } from './_scripts';
import UserBlock from './UserBlock';
import Loader from './../../components/Loader/Loader';
import { goToMainPage } from './../../_scripts/RedirectOnPage';

const User = ({match}) => {

	const [popout, setPopout] = useState(<Loader/>);

	const id = match.params.number;
	const user_info_block = 'user_content_' + id;


	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoUser(id).getInfo();
			if(!!window.globalInfo.infoUser) {
				document.title = window.globalInfo.infoUser.first_name + ' '+ window.globalInfo.infoUser.last_name;
				// setPopout(null);
			} else goToMainPage();
			setPopout(null);
		}
		fetchRequest();
	});



	return (
		<div>
		<MyRedirect/>
		<div id={user_info_block}>
		{
			popout !== null ? popout : <UserBlock info={window.globalInfo.infoUser} />		 
		}
		</div>
		</div>
		)
}
export default User;




