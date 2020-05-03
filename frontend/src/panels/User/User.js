import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MyRedirect from './../../components/MyRedirect';
import { GetInfoUser } from './_scripts';
import UserBlock from './UserBlock';
import Loader from './../../components/Loader/Loader';

const User = () => {

	const [popout, setPopout] = useState(<Loader/>);

	const id_user = window.location.hash.slice(7);
	const user_info_block = 'user_content_' + id_user;


	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoUser(id_user).getInfo();
			var info = window.globalInfo.infoUser;
			if(window.globalInfo.infoUser !== null) {
				setPopout(null);
				ReactDOM.render(<UserBlock info={info} />
					,document.getElementById(user_info_block));
			} else window.location.hash = '#/home';
		}
		fetchRequest();
	}, []);



	return (
		<div>
		<MyRedirect/>
		<div id={user_info_block}>
		{
			popout !== null ? popout : null		 
		}
		</div>
		</div>
		)
}
export default User;
