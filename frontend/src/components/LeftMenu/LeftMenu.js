import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import style from './Style.module.css';
import { NavLink } from 'react-router-dom';

export default class LeftMenu extends Component {
	state = { activeItem: 'home' };



	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		var menuInfo = null;
		var userLink = '/user/' + this.props.info.id;

		if(!!this.props.info.options_left_menu) {
			menuInfo = JSON.parse(this.props.info.options_left_menu);
		}

		return (
			<div className={ style.block } >
			{
				menuInfo !== null ?

				<Menu className={ style.nav } pointing secondary vertical>

				{
					menuInfo.my_page === 1 ?
					<NavLink to={userLink}>
					<Menu.Item
					name='Моя страница'
					active={activeItem === 'Моя страница'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}


				{
					menuInfo.news === 1 ?
					<NavLink to='/home'>
					<Menu.Item
					name='Новости'
					active={activeItem === 'Новости'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}



				{
					menuInfo.messages === 1 ?
					<NavLink to='/chats_list'>
					<Menu.Item
					name='Сообщения'
					active={activeItem === 'Сообщения'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}



				{
					menuInfo.friends === 1 ?
					<NavLink to='/friends'>
					<Menu.Item
					name='Друзья'
					active={activeItem === 'Друзья'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}


				{
					menuInfo.groups === 1 ?
					<NavLink to='/groups'>
					<Menu.Item
					name='Группы'
					active={activeItem === 'Группы'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}



				{
					menuInfo.games === 1 ?
					<NavLink to='/games_list'>
					<Menu.Item
					name='Игры'
					active={activeItem === 'Игры'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}

				</Menu> : null

			}
			</div>
			)
	}
}
