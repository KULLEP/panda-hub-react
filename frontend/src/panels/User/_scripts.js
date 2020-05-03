import React from 'react';
import $ from "jquery";



export class GetInfoUser {

	url = window.globalInfo.php_url_user;

	constructor(id_user) {
		this.id_user = id_user;
	}

	/* СПИСОК МЕМОВ */
	getInfo() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_user.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				window.globalInfo.infoUser = JSON.parse(e);
			}}
			)
		)
	}
}