import React from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './../../App';
import { Redirect } from 'react-router-dom';

export class AuthClass {

	url = window.globalInfo.php_url_reg_auth_rec;

	constructor(email, password) { 
		this.email = email;
		this.password = password;
	}

	validation() {
		let res = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.email); 
		if(res === true) {
			this.auth();
		} else {
			alert('Введите действующую почту');
		}
	}


	/* АВТОРИЗАЦИЯ */
	auth = () => {
	return ( $.ajax({
		method: 'GET',
		url: this.url + 'auth.php',
		data: {
			email: this.email,
			password: this.password
		},
		success: e => { 
			console.log(e);
			if(e === '0'){
				alert('Подтвердите аккаунт');
				localStorage.setItem('email_access', this.email);
				ReactDOM.render(
					<HashRouter>
					<Redirect from='/' to='/account_approved'/>
					<App />
					</HashRouter>
					,document.getElementById('root')
					);
			}else if(e === '1') {
				localStorage.setItem('email', this.email);
				localStorage.setItem('password', this.password);
				ReactDOM.render(
					<HashRouter>
					<Redirect from='/' to='/home'/>
					<App />
					</HashRouter>
					,document.getElementById('root')
					);
			} else {
				alert('Почта или пароль неправильные');
			}
		}
	})
	)
};

}