import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';
import style from './Style.module.css';

export class PostRequsetInFriend {

	url = window.globalInfo.php_url_friends;
	id_current_user = window.globalInfo.infoCurrentUser.id;

	constructor(id_friend) {
		this.id_friend = id_friend;
	}

	/* ОТПРАВИТЬ ЗАЯВКУ В ДРУЗЬЯ */
	post() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'friend_request.php',
			data: {
				id_current_user: +this.id_current_user,
				id_friend: +this.id_friend
			},
			success: e => { 
				// new GoToUserAccount(this.id_friend).go();
				ReactDOM.render(
					<p className={ style.friend_request }>Заявка в друзья отправлена</p>
					,document.getElementById('text_post_user_in_friend')
					);
				document.querySelector('.' + style.btn_add_in_friend).style.display = 'none';
			}}
			)
		)
	}
}