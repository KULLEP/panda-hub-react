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
	




	useEffect(() => {
		async function fetchRequest() {
			let arrUsersLikesMemes = await new GetUsersLikesMeme(id_meme).get();
			window.globalInfo.arrUsersLikesMemes = arrUsersLikesMemes ? JSON.parse(arrUsersLikesMemes) : [];
			setPopout(null);
		}
		fetchRequest();
	}, []);




	/* ПРИ ПОКИДАНИИ КУРСОРА БЛОКА С ЛАЙКОМ */
	const mouse_out_like = (e) => {
		document.getElementById(above_like_block).style.display = 'none';
	}

	return (
		<HashRouter>
		<div className='w-100' onMouseLeave={mouse_out_like}>
		{
			popout !== null ? popout : 
			<div>
			{
				window.globalInfo.arrUsersLikesMemes.map((e) => {
					let full_name = e.user_first_name + ' ' + e.user_last_name;
					return (
						<Link title={full_name} to={`/user/${e.user_id}`} className={ style.mini_user_like } >
						<ImageMy propsType='user' propsUrl={e.user_id} /> 
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
