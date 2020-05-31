import React from 'react';
import style from './Style.module.css';
import UserHeader from './../../components/UserHeader/UserHeader';
import UserGroups from './../../components/UserGroupsAndFriends/UserGroups';
import UserFriends from './../../components/UserGroupsAndFriends/UserFriends';
import UserMainContent from './../../components/UserMainContent/UserMainContent';

const UserBlock = ({info}) => {

	return (
		<div className={ style.mainBlock } >
		<UserHeader className={ style.header } info={info} />
		<UserGroups className={ style.sideContent } info={info} />
		<UserMainContent className={ style.mainContent } info={info} />
		<UserFriends className={ style.sideContent } info={info} />
		</div>
		)
}
export default UserBlock;
