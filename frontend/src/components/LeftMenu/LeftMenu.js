import React, { Component, useState, useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import style from './Style.module.css';
import { NavLink, } from 'react-router-dom';
import ReactDOM from 'react-dom';

export default class LeftMenu extends Component {
	state = { 
		activeItem: 'home',
		countFriendsRequest: window.globalInfo.countFriendsRequest
	};



	handleItemClick = (e, { name }) => this.setState({ activeItem: name });


	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({ countFriendsRequest: window.globalInfo.countFriendsRequest});
		}, 2000);
	};



	render() {
		const { activeItem } = this.state;
		let { countFriendsRequest } = this.state;

		var menuInfo = '';
		var userLink = '/user/' + this.props.info.id;


		if(!!this.props.info.options_left_menu) {
			menuInfo = JSON.parse(this.props.info.options_left_menu);
		}

		return (
			<div>

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
					<NavLink to='/news'>
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
					id='left_menu_friends'
					name='Друзья'
					active={activeItem === 'Друзья'}
					onClick={this.handleItemClick}
					/>	
					<span className={ style.count_friends }>{countFriendsRequest}</span>			 
					</NavLink>
					: null
				}

				{
					menuInfo.groups === 1 ?
					<NavLink to='/groups_list'>
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


				{
					menuInfo.shop === 1 ?
					<NavLink to='/shop'>
					<Menu.Item
					name='Магазин'
					active={activeItem === 'Магазин'}
					onClick={this.handleItemClick}
					/>
					</NavLink>
					: null
				}




				</Menu> : null

			}
			</div>

			<nav className={ style.blockMobile } pointing secondary vertical>	

			<NavLink to='/news'>
			<Icon name='newspaper outline' size='big' />
			</NavLink>

			<NavLink to='/groups'>
			<Icon name='usb' size='big' />
			</NavLink>

			<NavLink to='/chats_list'>
			<Icon name='skyatlas' size='big' />
			</NavLink>

			<NavLink to='/friends'>
			<Icon name='group' size='big' />
			</NavLink>

			<NavLink to={userLink}>
			<Icon name='user outline' size='big' />
			</NavLink>

			</nav>
			</div>
			)
	}
}
