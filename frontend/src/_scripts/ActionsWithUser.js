import React from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import App from './../App';
import { HashRouter } from 'react-router-dom';

export class GetInfoCurrentUser {

	url = window.globalInfo.php_url_user;

	constructor(email, password) {
		this.email = email;
		this.password = password;
	}

	/* ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ */
	getInfo() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_current_user.php',
			data: {
				email: this.email,
				password: this.password
			},
			success: e => { 
				window.globalInfo.infoCurrentUser = JSON.parse(e);
			}}
			)
		)
	}
}


/* ВЫХОД */
export const logout = () => {
	localStorage.clear();
	ReactDOM.render(
	<HashRouter>
	<App />
	</HashRouter>
	,document.getElementById('root')
	);
}



