import React from 'react'
import { Flag, Dropdown, Icon } from 'semantic-ui-react'
import style from './Style.module.css';
import { CountryList } from './../CountryList';
import ImageMy from './../ImageMy/ImageMy';
import { SaveImage } from './../../panels/Options/_scripts.js';
import { GoToUserAccount } from './../../_scripts/RedirectOnPage';
import { PostRequsetInFriend } from './_scripts';


const UserHeader = ({info}) => {

	var this_user_is_friend = false;
	var this_user_in_request_friend = false;
	var add_user_in_friend = false;
	var id_current_user = window.globalInfo.infoCurrentUser.id;
	var arr_friends_requuest = window.globalInfo.infoUser.friends_requests;
	var friends = window.globalInfo.infoCurrentUser.friends;
	
	/* ПАРСИНГ ДРУЗЕЙ */
	if(friends === '' || friends === null) { friends = '[-1]'; }
	const is_friend = JSON.parse(friends)?.find(e => +e === +info.id);
	this_user_is_friend = is_friend;
	this_user_is_friend = (this_user_is_friend > 0 || this_user_is_friend !== undefined) ? true : false;

	/* ПАРСИНГ ЗАЯВКИ В ДРУЗЬЯ */
	if (!this_user_is_friend) {
		if(arr_friends_requuest === '' || arr_friends_requuest === null) { arr_friends_requuest = '[-1]'; }
		const is_request_friend = JSON.parse(arr_friends_requuest)?.find(e => +e === +id_current_user);
		this_user_in_request_friend = is_request_friend;
		this_user_in_request_friend = (this_user_in_request_friend > 0) ? true : false;
	}

	/* ЕСЛИ НЕТУ В ДРУЗЬЯХ И НЕТУ В ЗАПРОСАХ В ДРУЗЬЯ */
	if (!this_user_is_friend && !this_user_in_request_friend && +info.id !== +window.globalInfo.infoCurrentUser.id) {
		add_user_in_friend = true;
	}

	const postRequsetInFriend = async () => {
		await new PostRequsetInFriend(info.id).post();
	}



	/* ФОНОВОЕ ИЗОБРАЖЕНИЕ */
	setTimeout(() => {
		let bg_image = info.background_image;
		bg_image = ( !!bg_image ) ? bg_image : null;
		if (!!bg_image) {
			document.querySelector('.'+style.header).style.backgroundImage = `url("${bg_image}")`;
		}
	}, 0);


	var country = '';
	if(info.country !== null) {
		country = new CountryList(info.country).search();
	}

	var network = info.network;
	network = network === '1' ? 'Онлайн' : 'Оффлайн';


	const loadImage = async () => {
		let image = document.getElementById('image-upload').files[0];
		await new SaveImage(image).save();
		await new GoToUserAccount(info.id).go();
	};


	return (
		<div className={ style.header } >

		<div className={ style.left } >
		<ImageMy propsType='user' propsUrl={info.id} /> 
		</div>

		<label for="image-upload" className={ style.image_upload }>
		<Icon name='image outline' size='huge' />
		</label>
		<input onChange={loadImage} className='d-none' id="image-upload" type="file"/>



		<div className={ style.center } >
		<p className={ style.fullName } >{info.first_name} {info.last_name}</p>
		<p className={ style.nickname_country } >{info.nickname} <Flag name={country.countryCode} /> </p>
		<p className={ style.status } >{info.status}</p>
		</div>

		<div className={ style.right } >
		<p className={ style.network }>{network}</p>
		<p className={ style.rank } >Рейтинг {info.rank}</p>
		{
			this_user_is_friend !== false ?
			<Dropdown text='Ещё' className={ style.add } >
			<Dropdown.Menu>
			<Dropdown.Item icon='lock' text='Добавить в ЧС' />
			<Dropdown.Item icon='balance scale' text='Пожаловаться' />
			<Dropdown.Item icon='user delete' text='Удалить из друзей' />
			<Dropdown.Item icon='sign-in' text='Пригласить в группу' />
			</Dropdown.Menu>
			</Dropdown> 
			: null
		}

		<div id='text_post_user_in_friend'>
		{
			this_user_in_request_friend !== false ? <p className={ style.friend_request }>Заявка в друзья отправлена</p> : null
		}
		</div>

		{
			add_user_in_friend !== false ? <Icon title='Добавить в друзья' onClick={postRequsetInFriend} name='add user' size='big' className={ style.btn_add_in_friend } /> : null
		}
		</div>


		</div>
		)
}
export default UserHeader
