import React from 'react';
// import ReactDOM from 'react-dom';
// import { HashRouter } from 'react-router-dom';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import style from './Style.module.css';
import { logout } from './../../_scripts/ActionsWithUser';
import { NavLink } from 'react-router-dom';
import ImageMy from './../ImageMy/ImageMy';
// import { GetListUsersSearch } from './../../_scripts/GetListUsersSearch';

const Toolbar = ({id_user, name}) => {

	let userLink = '/user/' + id_user;

	const image = (
		<span>
		<span className={ style.textName }>{name}</span>
		<ImageMy propsUrl={id_user} propsType='user' />
		</span>
		)



	const getListUsersSearch = async (e) => {
		// let name = e.target.value;
		// let block = '.' + style.mainBlock;
		// console.log(block);
		// if(name.length > 1 && name.length < 30) {
		// 	await new GetListUsersSearch(name, block).get();
		// 	let arr_users_search = window.globalInfo.arrInfoUsersSearch;
		// 	ReactDOM.render(
		// 		<HashRouter>
		// 		{
		// 			arr_users_search.map(e => {
		// 				id_last_user = e.id; 
		// 				return (
		// 					<UserCard info={e}/>
		// 					)}
		// 				)
		// 		}
		// 		</HashRouter>,document.querySelector(block));
		// } else {
		// 	await new GetListUsers(id_last_user).get();
		// 	ReactDOM.render(
		// 		<HashRouter>
		// 		{
		// 			arr_users.map(e => {
		// 				id_last_user = e.id; 
		// 				return (
		// 					<UserCard info={e}/>
		// 					)}
		// 				)
		// 		}
		// 		</HashRouter>,document.querySelector(block));
		// }
	};


	return (
		<div className={ style.header } >

		<div  className={ style.content }>

		<NavLink to='/news'>
		<div className={ style.logo }>PH</div>
		</NavLink>


		<Menu.Item className={ style.search } >
		<Input className={ style.inputSearch } onChange={getListUsersSearch} icon='search' placeholder='Поиск...' />
		</Menu.Item>


		<div className={ style.nameBlock }>
		<Dropdown
		trigger={image}
		pointing='top left'
		icon={null}
		>
		<Dropdown.Menu>
		<NavLink to={userLink} className={ style.item_menu }>
		<Dropdown.Item icon='user' text='Моя страница' />
		</NavLink>
		<Dropdown.Divider />
		<NavLink to='/options' className={ style.item_menu }>
		<Dropdown.Item icon='cog' text='Настройки' />
		</NavLink>
		<Dropdown.Divider />
		<Dropdown.Item onClick={logout} icon='x' text='Выйти' />
		</Dropdown.Menu>

		</Dropdown>
		</div>

		</div>
		</div>
		)
}


export default Toolbar
