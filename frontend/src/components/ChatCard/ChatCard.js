import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import ImageMy from './../ImageMy/ImageMy';

const ChatCard = ({info}) => {


	return (
		<Link to={`/chat/${info.id}`} className={ style.cardUser } >
		<Card>
		<ImageMy propsUrl={info.img} propsType='chat' />
		<Card.Content>
		<Card.Header>{info.first_name} {info.last_name}</Card.Header>
		<Card.Description>
		{info.last_message}
		</Card.Description>
		</Card.Content>
		<Card.Content extra className={ style.nickname }>
		<span className='date'><Icon name='time' />{info.last_date_message}</span></Card.Content>
		</Card>
		</Link>
		)

}

export default ChatCard;

