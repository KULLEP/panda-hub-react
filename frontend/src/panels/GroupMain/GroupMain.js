import React, { useState, useEffect } from 'react';
import BlockMeme from'./../../components/BlockMeme/BlockMeme';
import MyRedirect from './../../components/MyRedirect';
import { GetListMemesGroup, GetInfoGroup } from './_scripts';
import Loader from './../../components/Loader/Loader';
import CardAddMeme from './../../components/CardAddMeme/CardAddMeme';
import RightMenu from './RightMenu';
import { Header } from 'semantic-ui-react';


const GroupMain = ({match}) => {


 
	var arr_memes = window.globalInfo.arrInfoMemes;
	var id_user = window.globalInfo.infoCurrentUser.id;

	var info_group = window.globalInfo.infoGroup;
	var is_admin = false;



	const id_group = match.params.number;

	const [popout, setPopout] = useState(<Loader/>);
	const [cardAddMeme, setCardAddMeme] = useState(null);




	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoGroup(id_group).get();
			await new GetListMemesGroup(id_group).get();
			document.title = window.globalInfo.infoGroup.name_group;

			is_admin = window.globalInfo.infoGroup.admin === id_user ? true : false;

			if (is_admin === true) {
				setCardAddMeme(<CardAddMeme id_group={id_group} />);
			}

			setPopout(null);
		}
		fetchRequest();
	}, []);



	return (
		<div className='w-100'>

		<Header as='h2' attached='top' className='mb-2'>
		{
			info_group.name_group
		}
		</Header>


		{
			cardAddMeme 
		}
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_memes.map(e => (
				<BlockMeme info={e} />
				))
		}
		<RightMenu id_group={id_group} />
		</div>
		)
}
export default GroupMain;
