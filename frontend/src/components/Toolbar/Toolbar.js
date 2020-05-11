import React from 'react'
import { Input, Menu, Dropdown } from 'semantic-ui-react'
import style from './Style.module.css';
import { logout } from './../../_scripts/ActionsWithUser';
import { NavLink } from 'react-router-dom';
import ImageMy from './../ImageMy/ImageMy';

const Toolbar = ({id_user, name}) => {

	let userLink = '/user/' + id_user;

	const image = (
		<span>
		<span className={ style.textName }>{name}</span>
		<ImageMy propsUrl={id_user} propsType='user' />
		</span>
		)

	return (
		<div className={ style.header } >

		<div  className={ style.content }>

		<NavLink to='/home'>
		<div className={ style.logo } >PH</div>
		</NavLink>


		<Menu.Item className={ style.search } >
		<Input className={ style.inputSearch } icon='search' placeholder='Поиск...' />
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
