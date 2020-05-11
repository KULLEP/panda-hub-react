import React from 'react'
import { Flag, Dropdown, Icon } from 'semantic-ui-react'
import style from './Style.module.css';
import { CountryList } from './../CountryList';
import ImageMy from './../ImageMy/ImageMy';
import { SaveImage } from './../../panels/Options/_scripts.js';
import { goToUserAccount } from './../../_scripts/RedirectOnPage';

const UserHeader = ({info}) => {


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
		await new goToUserAccount(info.id).go();
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
		<Dropdown text='Ещё' className={ style.add } >
		<Dropdown.Menu>
		<Dropdown.Item icon='lock' text='Добавить в ЧС' />
		<Dropdown.Item icon='balance scale' text='Пожаловаться' />
		<Dropdown.Item icon='user delete' text='Удалить из друзей' />
		<Dropdown.Item icon='sign-in' text='Пригласить в группу' />
		</Dropdown.Menu>
		</Dropdown>
		</div>

		</div>
		)
}
export default UserHeader
