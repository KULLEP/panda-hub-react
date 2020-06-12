import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetListFriendsRequests, PostNewArrReqFriends, AddNewFriend } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Card, Icon, Header, Segment, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import ImageMy from './../../components/ImageMy/ImageMy';

const FriendsRequestsList = () => {
	
	document.title = 'Заявки в друзья';

	var arr_friends = window.globalInfo?.arrInfoFriendsRequests;
	const id = window.globalInfo?.infoCurrentUser?.id;
	const [popout, setPopout] = useState(<Loader/>);


	let num_req_friends = window.globalInfo.countFriendsRequest;
	num_req_friends = num_req_friends <= 0 ? '' : num_req_friends;
	var [countFriendsRequest, setCountFriendsRequest] = useState(num_req_friends);


	useEffect(() => {
		async function fetchRequest() {
			await new GetListFriendsRequests(id).get();
			setPopout(null);
		}
		fetchRequest();
	});


	const submit_button = async (id, id_block) => {
		let num = window.globalInfo.countFriendsRequest - 1;
		window.globalInfo.countFriendsRequest = num <= 0 ? '' : num;

		let a = JSON.parse(window.globalInfo.infoCurrentUser.friends_requests);
		let el = a.indexOf(+id);
		a.splice(el, 1);
		let res_arr = JSON.stringify(a);
		window.globalInfo.infoCurrentUser.friends_requests = res_arr;
		let id_user = +window.globalInfo.infoCurrentUser.id;
		await new PostNewArrReqFriends(id_user, res_arr).post();
		document.getElementById(id_block).parentElement.parentElement.parentElement.innerHTML = '';
		setCountFriendsRequest(num);
	}

	const confirmFriend = async (e) => {
		let id = e.currentTarget.dataset.id;
		let id_block = e.currentTarget.id;
		let id_user = +window.globalInfo.infoCurrentUser.id;
		submit_button(id, id_block);
		await new AddNewFriend(id_user, id).post();	
	}

	const rejectFriend = async (e) => {
		let id = e.currentTarget.dataset.id;
		let id_block = e.currentTarget.id;
		submit_button(id, id_block);
	}

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
				let id_block = 'block_friend_request_' + e.id;	
				return (
					<div className={ style.cardUser } >

					<Link to={`/user/${e.id}`}>
					<div className={ style.img_block }>
					<ImageMy propsUrl={e.id} propsType='user' />
					</div>
					</Link>

					<div className={ style.card_content }>

					<Link to={`/user/${e.id}`}>
					<span className='h4 text-dark' >{e.first_name} {e.last_name}</span>
					</Link>
					
					<span className='date float-right text-secondary'><Icon name='time' /> Заходил {e.date_last_login}</span>
					<p>{e.status}</p>
					<p extra className='text-dark'>123123{e.nickname}</p>

					<Button.Group className={ style.button_request_friend }>
					<Button data-id={e.id} id={id_block} onClick={confirmFriend} positive>Принять</Button>
					<Button.Or text='|||' />
					<Button data-id={e.id} id={id_block} onClick={rejectFriend}>Отменить</Button>
					</Button.Group>

					</div>

					</div>
					)})
		}
		</Segment>
		</div>
		)
}

export default FriendsRequestsList;


