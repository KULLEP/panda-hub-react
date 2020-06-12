import React, { useState, useEffect } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';
import style from './Style.module.css';
import ImageMy from './../ImageMy/ImageMy';
import { GetUsersLikesMeme } from './_scripts';

const ListUsersLikes = ({id_meme, above_like_block}) => {


	const [popout, setPopout] = useState( 
		<Dimmer active>
		<Loader size='small' />
		</Dimmer>
		);
	

	var arrUsersLikesMemes = window.globalInfo.arrUsersLikesMemes;


	useEffect(() => {
		async function fetchRequest() {
			arrUsersLikesMemes = await new GetUsersLikesMeme(id_meme).get();
			// window.globalInfo.arrUsersLikesMemes = await new GetUsersLikesMeme(id_meme).get();
			setPopout(null);
		}
		fetchRequest();
	}, []);




	/* ПРИ ПОКИДАНИИ КУРСОРА БЛОКА С ЛАЙКОМ */
	const mouse_out_like = () => {
		console.log('out °')
		setTimeout(() => {
			document.getElementById(above_like_block).style.display = 'none';
		}, 4000);
	}

	return (
		<HashRouter>
		<div className='w-100' onMouseOut={mouse_out_like}>
		{
			popout !== null ? popout : 
			<div>
			{
				arrUsersLikesMemes.map((e) => {
					let full_name = e.first_name + ' ' + e.last_name;
					return (
						<Link title={full_name} to={`/user/${e.id}`} className={ style.mini_user_like } >
						<ImageMy propsType='user' propsUrl={e.id} /> 
						</Link>
						)
				})
			}
			</div>
		}
		</div>
		</HashRouter>
		)
}

export default ListUsersLikes;
