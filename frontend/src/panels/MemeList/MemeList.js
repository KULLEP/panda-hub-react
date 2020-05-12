import React, { useState, useEffect } from 'react';
import BlockMeme from'./../../components/BlockMeme/BlockMeme';
import MyRedirect from './../../components/MyRedirect';
import { GetListMemes } from './_scripts';
import Loader from './../../components/Loader/Loader';
import CardAddMeme from './../../components/CardAddMeme/CardAddMeme';

const MemeList = () => {

	document.title = 'Новости';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_memes = window.globalInfo.arrInfoMemes;


	useEffect(() => {
		async function fetchRequest() {
			await new GetListMemes().getMemes();
			setPopout(null);
		}
		fetchRequest();
	}, []);



	return (
		<div className='w-100'>
		<CardAddMeme />
		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_memes.map(e => (
				<BlockMeme info={e} />
				))
		}
		</div>
		)
	}
	export default MemeList;
