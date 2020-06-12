import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import ImageMy from './../ImageMy/ImageMy';

const ChatCard = ({info}) => {
	
	let last_date_message = info.last_date_message;
	last_date_message = last_date_message !== null ? last_date_message : 'Сейчас'


	return (


		<Link to={`/chat/${info.id}`} className={ style.cardUser } >

		<div className={ style.img_block }>
		<ImageMy propsUrl={info.id} propsType='chat' />
		</div>

		<div className={ style.card_content }>
		<span className='h4 text-dark' >{info.name}</span>
		<span className='date float-right text-secondary'><Icon name='time' />{last_date_message}</span>
		<p>{info.status}</p>
		<p extra className='text-dark'>{info.first_name} {info.last_name} {info.last_message}</p>

		</div>

		</Link>


		)

}

export default ChatCard;

