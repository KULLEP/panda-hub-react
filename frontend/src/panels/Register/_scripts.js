import React from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './../../App';
import { Redirect } from 'react-router-dom';

export class RegisterClass {

	url = window.globalInfo.php_url_reg_auth_rec;

	constructor(first_name, last_name, email, password) { 
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
	}

	validation() {
		let res = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(this.email); 
			if(res === true) {
				this.register();
			} else {
				alert('Введите действующую почту');
			}
		}


		/* РЕГИСТРАЦИЯ */
		register = () => {
				return ( $.ajax({
					method: 'GET',
					url: this.url + 'register.php',
					data: {
						first_name: this.first_name,
						last_name: this.last_name,
						email: this.email,
						password: this.password
					},
					success: e => { 
						console.log(e);
						if(e === '1') {
							alert('На почту вышлен код подтверждения');
							localStorage.setItem('email_access', this.email);
							ReactDOM.render(
								<HashRouter>
								<Redirect from='/' to='/account_approved'/>
								<App />
								</HashRouter>
								,document.getElementById('root')
								);
						} else {
							alert('Пользователь с такой почтой уже существует');
						}
					}
				})
				)
			};

		}


		export class AccountApprovedClass {

			url = window.globalInfo.php_url_reg_auth_rec;

			constructor(email, code) { 
				this.email = email;
				this.code = code;
			}

			/* ПОДТВЕРЖДЕНИЕ */
			approved = () => {
					console.log(this.email+' '+this.code);
						return ( $.ajax({
							method: 'GET',
							url: this.url + 'approved.php',
							data: {
								email: this.email,
								code: this.code
							},
							success: e => { 
								console.log(e);
								if(e === '1') {
									alert('Аккаунт активирован');
									localStorage.clear();
									ReactDOM.render(
										<HashRouter>
										<Redirect from='/' to='/auth'/>
										<App />
										</HashRouter>
										,document.getElementById('root')
										);
								} else {
									alert('Код не верный');
								}
							}
						})
						)
					};

				}