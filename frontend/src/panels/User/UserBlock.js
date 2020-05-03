import React from 'react';
import style from './Style.module.css';
import Loader from './../../components/Loader/Loader';
import UserHeader from './../../components/UserHeader/UserHeader';
import UserGroups from './../../components/UserGroupsAndFriends/UserGroups';
import UserFriends from './../../components/UserGroupsAndFriends/UserFriends';
import UserMainContent from './../../components/UserMainContent/UserMainContent';

const UserBlock = ({info}) => {

console.log(info);

	return (
		<div className={ style.mainBlock }>
		<UserHeader info={info} />
		<UserGroups info={info} />
		<UserMainContent info={info} />
		<UserFriends info={info} />
		</div>
		)
}
export default UserBlock;
