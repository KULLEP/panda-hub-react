import React from 'react'
import { Flag, Dropdown } from 'semantic-ui-react'
import style from './Style.module.css';
import { CountryList } from './../CountryList';
import { imgLoaded, imgErrorUser } from './../../_scripts/imageOnError';

const UserHeader = ({info}) => {

	const img_u = 'https://panda-hub.ru/avatars/' + info.user_id + '.png';


	const imgLoad = (e) => {
		imgLoaded(e.currentTarget);
	}

	const imgErr = (e) => {
		imgErrorUser(e.currentTarget);
	}

	var country = '';
	if(info.country !== null) {
		country = new CountryList(info.country).search();
	}

	var network = info.network;
	network = network === '1' ? 'Онлайн' : 'Оффлайн';

	return (
		<div className={ style.header } >

		<div className={ style.left } >
		<img src={img_u} onLoad={imgLoad} onError={imgErr} alt='...' />
		</div>



		<div className={ style.center } >
		<p className={ style.fullName } >{info.last_name} {info.first_name}</p>
		<p className={ style.nickname_country } >{info.nickname} <Flag name={country.countryCode} /> </p>
		<p className={ style.status } >{info.status}</p>
		</div>

		<div className={ style.right } >
		<p className={ style.rank } >Рейтинг {info.rank}</p>
		<p>{network}</p>
		<Dropdown text='Ещё'>
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
