import React, { useState, useEffect } from 'react';
import style from './Style.module.css';
import { GetFriends } from './_scripts';
import { Loader } from 'semantic-ui-react';
import ImageMy from './../ImageMy/ImageMy';
import { Link } from 'react-router-dom';


const UserFriends = ({info}) => {

	const [popout, setPopout] = useState(<Loader/>);

	useEffect(() => {
		async function fetchRequest() {
			await new GetFriends(info.id).get();
			setPopout(null);
		}
		fetchRequest();
	}, []);



	return (
		<div className={ style.block } >

		<div className={ style.content } >

		{
			popout !== null ?  null :
			window.globalInfo.arrFriends.map(e => (
				<Link to={`/user/${e.id}`} >

				<div className={ style.item } >
				<ImageMy propsType='user' propsUrl={e.id} /> 
				<p>{e.first_name}</p>
				</div>
				</Link>
				))
		}
		</div>

		</div>
		)
}
export default UserFriends
