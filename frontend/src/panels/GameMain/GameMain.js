import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import Loader from './../../components/Loader/Loader';
import style from './Style.module.css';
import { GetInfoGame } from './_scripts';

const GameMain = ({match}) => {

	const [popout, setPopout] = useState(<Loader/>);

	const id_game = match.params.number;

	var info = window.globalInfo.InfoGame;
	console.log(id_game);


	useEffect(() => {
		async function fetchRequest() {
			await new GetInfoGame(id_game).get();
			window.globalInfo.InfoGame.options = JSON.parse(window.globalInfo.InfoGame.options);
			setPopout(null);
		}
		fetchRequest();
	}, []);


	return (
		<div className='position-absolute'>
		<MyRedirect/>
		{
			popout !== null ? popout : 
			<iframe src={info.url_app} width={info.options.width} height={info.options.height} >
			Ваш браузер не поддерживает плавающие фреймы!
			</iframe>
		}
		</div>
		)
}


export default GameMain;
