import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MyRedirect from './../../components/MyRedirect';
import { GetListGroups, CreateNewGroup } from './_scripts';
import Loader from './../../components/Loader/Loader';
import { Card, Icon, Header, Segment, Button, Form, Modal } from 'semantic-ui-react';
import style from './Style.module.css';
import App from './../../App';
import { Link, HashRouter, Redirect } from 'react-router-dom';
import ImageMy from './../../components/ImageMy/ImageMy';

const GroupsList = () => {
	
	document.title = 'Сообщества';
	const [popout, setPopout] = useState(<Loader/>);


	var arr_groups = window.globalInfo.arrGroups;



	useEffect(() => {
		async function fetchRequest() {
			arr_groups = await new GetListGroups().get();
			window.globalInfo.arrGroups = JSON.parse(arr_groups);
			setPopout(null);
		}
		fetchRequest();
	});


	const createNewGroup = async () => {
	 	let name_group = document.getElementById('name_group_input').value;
	 	await new CreateNewGroup(name_group).create();
		ReactDOM.render(
			<HashRouter>
			<Redirect from='/' to='/groups_list'/>
			<App />
			</HashRouter>
			,document.getElementById('root')
			);
	}


	return (
		<div>
		<Header as='h2' attached='top' className={ style.header }>

		<Modal className={ style.main_modal } trigger={<Button basic color='green' >Создать группу</Button>}>
		<Modal.Header>Создать группу</Modal.Header>
		<Modal.Content>
		<Modal.Description>
		<Form>

		<Form.Field>
		<label>Название</label>
		<input id='name_group_input' placeholder='Название группы' />
		</Form.Field>

		<Button className='float-right' onClick={createNewGroup} inverted color='blue' >Создать</Button>
		</Form>

		</Modal.Description>
		</Modal.Content>
		</Modal>


		<Link to='groups_all' className='float-right'>
		<Button color='blue'>Найти группу</Button>
		</Link>


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
export default GroupsList;


