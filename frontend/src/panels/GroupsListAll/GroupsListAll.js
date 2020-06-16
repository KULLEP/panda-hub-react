import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetListAllGroups } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Card, Icon, Header, Segment, Button, Input } from 'semantic-ui-react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import ImageMy from './../../components/ImageMy/ImageMy';
 

const GroupsListAll = () => {
	
	document.title = 'Сообщества';
	const [popout, setPopout] = useState(<Loader/>);


	var arr_groups = window.globalInfo.arrGroups;
 


	useEffect(() => {
		async function fetchRequest() {
			arr_groups = await new GetListAllGroups().get();
			window.globalInfo.arrGroups = JSON.parse(arr_groups);
			setPopout(null);
		}
		fetchRequest();
	});

	return (
		<div>
		<Header as='h2' attached='top' className={ style.header }>

	 
		<Input className={ style.inputSearch } icon='search' placeholder='Поиск...' />
	 


		</Header>
		<Segment className={ style.mainBlock } >	 
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_groups.map(e => {	
				return (
					<Link to={`/group/${e.id}`} className={ style.cardUser } >

					<div className={ style.img_block }>
					<ImageMy propsUrl={e.id} propsType='user' />
					</div>

					<div className={ style.card_content }>
					<span className='h4 text-dark' >{e.name_group}</span>
					<span className='date float-right text-secondary'><Icon name='time' /> Дата создания {e.date_groups}</span>
					</div>

					</Link>
					)})
		}
		</Segment>
		</div>
		)
}
export default GroupsListAll;


