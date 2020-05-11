import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetListFriends } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Card, Icon, Header, Segment, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import ImageMy from './../../components/ImageMy/ImageMy';

const FriendsList = () => {

	document.title = 'Друзья';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_friends = window.globalInfo.arrInfoFriends;

	let id = window.globalInfo.infoCurrentUser.id;

	useEffect(() => {
		async function fetchRequest() {
			await new GetListFriends(id).get();
			setPopout(null);
		}
		fetchRequest();
	}, []);


	return (
		<div>
		<Header as='h2' attached='top'>
		<Link to='users_list'  className={ style.buttonFindFriend } >
		<Button color='blue'>Найти друзей</Button>
		</Link>
		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_friends.map(e => {	
				let img_u = 'https://panda-hub.ru/avatars/' + e.id + '.png';
				console.log(e);
				return (
					<Link to={`/user/${e.id}`} className={ style.cardUser } >
					<Card>
					<ImageMy propsUrl={e.id} propsType='user' />
					<Card.Content>
					<Card.Header>{e.first_name} {e.last_name}</Card.Header>
					<Card.Meta>
					<span className='date'><Icon name='time' /> Заходил {e.date_last_login}</span>
					</Card.Meta>
					<Card.Description>
					{e.status}
					</Card.Description>
					</Card.Content>
					<Card.Content extra className={ style.nickname }>{e.nickname}</Card.Content>
					</Card>
					</Link>
					)})
		}
		</Segment>
		</div>
		)
}
export default FriendsList;
