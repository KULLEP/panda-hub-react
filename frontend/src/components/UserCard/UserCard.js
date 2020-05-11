import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import ImageMy from './../ImageMy/ImageMy';

const UserCard = ({info}) => {


	return (
		<Link to={`/user/${info.id}`} className={ style.cardUser } >
		<Card>
		<ImageMy propsUrl={info.id} propsType='user' />
		<Card.Content>
		<Card.Header>{info.first_name} {info.last_name}</Card.Header>
		<Card.Meta>
		<span className='date'><Icon name='time' /> Заходил {info.date_last_login}</span>
		</Card.Meta>
		<Card.Description>
		{info.status}
		</Card.Description>
		</Card.Content>
		<Card.Content extra className={ style.nickname }>{info.nickname}</Card.Content>
		</Card>
		</Link>
		)

}

export default UserCard;

