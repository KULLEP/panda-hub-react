import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

window.globalInfo = {
	positionYForBack: 0,
	infoUser: {},
	arrInfoMemes: [],


	php_url: 'https://panda-hub-react.ru/php/',
	php_url_meme: 'https://panda-hub-react.ru/php/meme/',
	php_url_user: 'https://panda-hub-react.ru/php/user/',
	php_url_reg_auth_rec: 'https://panda-hub-react.ru/php/reg_auth_rec/',
};


ReactDOM.render(
	<HashRouter>
	<App />
	</HashRouter>
	,document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
