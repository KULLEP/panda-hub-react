import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';

const UserGroups = ({info}) => {

	const arrGroup = [15, 16, 17];

	return (
		<div className={ style.block } >

		<div className={ style.content } >

		{
			arrGroup.map(e => (

				<Link to={`/group/${e}`} >

				<div className={ style.item } >
				<img avatar src='https://i.pinimg.com/736x/cc/60/c0/cc60c0b7f9664e6d66472b765a50ea56--banff-canada-in-canada.jpg' alt='...' />
				<p>Group {e}</p>
				</div>
				</Link>
				))
		}
		</div>

		</div>
		)
}
export default UserGroups
