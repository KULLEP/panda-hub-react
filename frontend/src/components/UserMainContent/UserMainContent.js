import React, { useState, useEffect } from 'react';
import style from './Style.module.css';
import BlockMeme from'./../BlockMeme/BlockMeme';
import { GetMemesUser } from './_scripts';
import Loader from './../Loader/Loader';


const UserMainContent = ({info}) => {

	 
	const [popout, setPopout] = useState(<Loader/>);
	
	var arr_memes = window.globalInfo.arrInfoMemesUser;


	useEffect(() => {
		async function fetchRequest() {
			await new GetMemesUser(info.id).getMemes();
			setPopout(null);
		}
		fetchRequest();
	}, []);


	return (
		<div className={ style.content } >
		{
			popout !== null ? popout :
			arr_memes.map(e => (
				<BlockMeme info={e} />
				))
		}
		</div>
		)
}
export default UserMainContent
