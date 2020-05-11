import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import ImageMy from './../ImageMy/ImageMy';

const GameCard = ({info}) => {


	return (
		<Link to={`/game/${info.id}`} className={ style.cardUser } >
		<Card>
		<ImageMy propsUrl={info.image} propsType='game' />
		<Card.Content>
		<Card.Header>{info.name}</Card.Header>
		</Card.Content>
		<Card.Content extra className={ style.nickname }>
		<span className='date'>Описание: {info.description}</span>
		</Card.Content>
		</Card>
		</Link>
		)
}

export default GameCard;

