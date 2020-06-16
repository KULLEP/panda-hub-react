import React, { useState, useEffect } from 'react';
import BlockMeme from'./../../components/BlockMeme/BlockMeme';
import MyRedirect from './../../components/MyRedirect';
import { AuthInGroup } from './_scripts';
import Loader from './../../components/Loader/Loader';
import CardAddMeme from './../../components/CardAddMeme/CardAddMeme';
import style from './Style.module.css';
import { Button } from 'semantic-ui-react';
import { goToGroup } from './../../_scripts/RedirectOnPage';


const RightMenu = ({id_group}) => {


	let groups = JSON.parse(window.globalInfo.infoCurrentUser.groups);

	if (!groups) {
		groups = [];
	}

	let isParticipant = groups.find((e) => e === +id_group);

	if (isParticipant !== undefined) {
		isParticipant = true;
	} else {
		isParticipant = false;
	}


	const auth_in_group = async () => {
		await new AuthInGroup(id_group).auth();
		goToGroup(id_group);
	};


	const out_from_group = () => {
		console.log('Out ' + id_group);
	};


	return (
		<div className={ style.right_menu }>
		{
			isParticipant === false ?
			<Button basic color='green' onClick={auth_in_group} >
			Войти
			</Button>
			:
			<Button basic color='red' onClick={out_from_group} >
			Выйти
			</Button>
		}

		</div>
		)
}
export default RightMenu;
