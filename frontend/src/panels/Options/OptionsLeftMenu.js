import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Button, Form, Checkbox } from 'semantic-ui-react';
import { EditOptionsLeftMenu } from './_scripts.js';
import { goToOptionsPage } from './../../_scripts/RedirectOnPage';
import style from './Style.module.css';

const OptionsLeftMenu = () => {

	document.title = 'Настройки меню';
	
	var optionsInfo = JSON.parse(window.globalInfo.infoCurrentUser.options_left_menu);

	const submit = async () => {
		var id_user = window.globalInfo.infoCurrentUser.id;
		let arr_result = [];

		let my_page = +document.getElementById('my_page').checked;
		let news = +document.getElementById('news').checked;
		let messages = +document.getElementById('messages').checked;
		let friends = +document.getElementById('friends').checked;
		let groups = +document.getElementById('groups').checked;
		let games = +document.getElementById('games').checked;
		let shop = +document.getElementById('shop').checked;


		arr_result = {
			"my_page" : my_page,
			"news" : news,
			"messages" : messages,
			"friends" : friends,
			"groups" : groups,
			"games" : games,
			"shop" : shop
		}

		/* UPDATE */
		await new EditOptionsLeftMenu(id_user, arr_result).edit();

		/* GET NEW INFO USER */
		goToOptionsPage();
	}


	return (

		<Card>

		<Card.Content>


		<div className='text-center'>
		<Button.Group>
		<NavLink to='/options'>
		<Button >Основные</Button>
		</NavLink>
		<Button.Or text='|||' />
		<NavLink to='/options_left_menu'>
		<Button positive>Меню</Button>
		</NavLink>
		</Button.Group>
		</div>

		<hr/>



		<Form className='bg-white'>



		<Form.Field className={ style.checkBlock } >
		<span>Моя страница</span>
		<Checkbox toggle id='my_page' defaultChecked={optionsInfo.my_page} />
		</Form.Field>


		<Form.Field className={ style.checkBlock } >
		<span>Новости</span>
		<Checkbox toggle id='news' defaultChecked={optionsInfo.news} />
		</Form.Field>


		<Form.Field className={ style.checkBlock } >
		<span>Сообщения</span>
		<Checkbox toggle id='messages' defaultChecked={optionsInfo.messages} />
		</Form.Field>


		<Form.Field className={ style.checkBlock } >
		<span>Друзья</span>
		<Checkbox toggle id='friends' defaultChecked={optionsInfo.friends} />
		</Form.Field>


		<Form.Field className={ style.checkBlock } >
		<span>Группы</span>
		<Checkbox toggle id='groups' defaultChecked={optionsInfo.groups} />
		</Form.Field>


		<Form.Field className={ style.checkBlock } >
		<span>Игры</span>
		<Checkbox toggle id='games' defaultChecked={optionsInfo.games} />
		</Form.Field>

		<Form.Field className={ style.checkBlock } >
		<span>Магазин</span>
		<Checkbox toggle id='shop' defaultChecked={optionsInfo.shop} />
		</Form.Field>




		<div align='center'>
		<Button onClick={submit} inverted color='blue' >Сохранить</Button>
		</div>



		</Form>
		</Card.Content>

		</Card>

		)
}
export default OptionsLeftMenu;
