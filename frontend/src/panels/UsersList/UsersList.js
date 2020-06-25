import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MyRedirect from './../../components/MyRedirect';
import { GetListUsers } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Header, Segment, Input } from 'semantic-ui-react';
import { GetListUsersSearch } from './../../_scripts/GetListUsersSearch';
import style from './Style.module.css';
import UserCard from './../../components/UserCard/UserCard';
import { HashRouter } from 'react-router-dom';

const UsersList = () => {

	document.title = 'Пользователи';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_users = window.globalInfo.arrInfoUsers;
	var id_last_user = 0;


	useEffect(() => {
		async function fetchRequest() {
			await new GetListUsers(id_last_user).get();
			setPopout(null);
		}
		fetchRequest();
	});


	const getListUsersSearch = async (e) => {
		let name = e.target.value;
		let block = '.' + style.mainBlock;
		console.log(block);
		if(name.length > 0 && name.length < 30) {
			await new GetListUsersSearch(name, block).get();
			let arr_users_search = window.globalInfo.arrInfoUsersSearch;
			ReactDOM.render(
				<HashRouter>
				{
					arr_users_search.map(e => {
						id_last_user = e.id; 
						return (
							<UserCard info={e}/>
							)}
						)
				}
				</HashRouter>,document.querySelector(block));
		} else {
			await new GetListUsers(id_last_user).get();
			ReactDOM.render(
				<HashRouter>
				{
					arr_users.map(e => {
						id_last_user = e.id; 
						return (
							<UserCard info={e}/>
							)}
						)
				}
				</HashRouter>,document.querySelector(block));
		}
	};

	return (
		<div className='w-100'>
		<Header as='h2' attached='top'>
		<Input className={ style.inputSearch } onChange={getListUsersSearch} icon='search' placeholder='Поиск...' />
		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_users.map(e => {
				id_last_user = e.id; 
				return (
					<UserCard info={e}/>
					)}
				)
		}
		</Segment>
		</div>
		)

}

export default UsersList;

