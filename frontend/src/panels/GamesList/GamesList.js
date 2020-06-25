import React, { useState, useEffect } from 'react';
import MyRedirect from './../../components/MyRedirect';
import { GetListGames } from './_scripts';
import Loader from './../../components/Loader/Loader';
import GameCard from './../../components/GameCard/GameCard';
import style from './Style.module.css';
import { Link } from 'react-router-dom';


const GamesList = () => {

	document.title = 'Игры';

	const [popout, setPopout] = useState(<Loader/>);
	var arr_games = window.globalInfo.arrInfoGames;

	useEffect(() => {
		async function fetchRequest() {
			await new GetListGames().get();
			setPopout(null);
		}
		fetchRequest();
	});

	return (
		<div className='w-100'>	

		<div className={ style.right_menu }>
		<Link to='/developer' >
		Я разработчик
		</Link>
		</div>


		<MyRedirect/>
		{
			popout !== null ? popout :
			arr_games.map(e => {
				return (
					<GameCard info={e}/>
					)}
				)
		}
		</div>
		)

}

export default GamesList;

