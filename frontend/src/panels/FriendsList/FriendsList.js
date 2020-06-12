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
	var arr_friends = window.globalInfo?.arrInfoFriends;
	let id = window.globalInfo?.infoCurrentUser?.id;

	let num_req_friends = window.globalInfo.countFriendsRequest;
	var [countFriendsRequest, setCountFriendsRequest] = useState(num_req_friends);



	useEffect(() => {
		async function fetchRequest() {
			await new GetListFriends(id).get();
			setPopout(null);
		}
		fetchRequest();
	});

	return (
		<div>
		<Header as='h2' attached='top' className={ style.header }>

		<Link to='users_list' className='float-right'>
		<Button color='blue'>Найти друзей</Button>
		</Link>

		<Link to='friends_requests' className='float-right'>
		<Button color='blue'>Запросы в друзья 
		<span> {countFriendsRequest}</span>
		</Button>
		</Link>

		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_friends.map(e => {	
				return (
					<Link to={`/user/${e.id}`} className={ style.cardUser } >

					<div className={ style.img_block }>
					<ImageMy propsUrl={e.id} propsType='user' />
					</div>

					<div className={ style.card_content }>
					<span className='h4 text-dark' >{e.first_name} {e.last_name}</span>
					<span className='date float-right text-secondary'><Icon name='time' /> Заходил {e.date_last_login}</span>
					<p>{e.status}</p>
					<p extra className='text-dark'>123123{e.nickname}</p>

					</div>

					</Link>
					)})
		}
		</Segment>
		</div>
		)
}
export default FriendsList;


