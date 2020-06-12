import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import { HashRouter, Redirect } from 'react-router-dom';


/* ПЕРЕЙТИ В АККАУНТ */
export class GoToUserAccount {

	constructor(id) {
		this.id = id;
	}

	go = () => {
		let link = '/user/' + this.id;
		ReactDOM.render(
			<HashRouter>
			<Redirect from='/' to={link} />
			<App />
			</HashRouter>
			,document.getElementById('root')
			);
	}
}


/* ПЕРЕЙТИ НА ГЛАВНУЮ СТРАНИЦУ */
export const goToMainPage = () => {
	ReactDOM.render(
		<HashRouter>
		<Redirect from='/' to='/news' />
		<App />
		</HashRouter>
		,document.getElementById('root')
		);
}



/* ПЕРЕЙТИ НА СТРАНИЦУ С НАСТРОЙКАМИ */
export const goToOptionsPage = () => {
	ReactDOM.render(
		<HashRouter>
		<Redirect from='/' to='/options' />
		<App />
		</HashRouter>
		,document.getElementById('root')
		);
}


/* ПЕРЕЙТИ В МАГАЗИН */
export const goToShopPage = () => {
	ReactDOM.render(
		<HashRouter>
		<Redirect from='/' to='/shop' />
		<App />
		</HashRouter>
		,document.getElementById('root')
		);
}