import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import openSocket from 'socket.io-client';
import ReactDOMServer from 'react-dom/server';
import MessageBlock from './components/MessageBlock/MessageBlock';

const mainUrl = 'https://panda-hub-react.ru/';
// const mainUrl = 'https://panda-hub.ru/';

window.globalInfo = {
	positionYForBack: 0,
	chat_is_admin: 0,
	infoUser: {},
	infoGroup: {},
	infoCurrentUser: {},
	InfoChat: {},
	InfoGame: {},
	arrInfoMemes: [],
	arrInfoMemesUser: [],
	arrInfoFriends: [],
	arrInfoFriendsRequests: [],
	arrInfoUsers: [],
	arrInfoGames: [],
	arrInfoUsersSearch: [],
	arrInfoChatsList: [],
	arrMessages: [],
	arrUsersLikesMemes: [],

	arrFriends: [],
	arrGroups: [],

	listOfWriters: '',

	countFriendsRequest: '',

	url_avatar: mainUrl + 'content/avatars/',
	url_meme_img:  mainUrl + 'content/memes/',
	url_meme_content:  mainUrl + 'content/memes/',
	php_url:  mainUrl + 'php/',
	php_url_meme:  mainUrl + 'php/meme/',
	php_url_user:  mainUrl + 'php/user/',
	php_url_reg_auth_rec:  mainUrl + 'php/reg_auth_rec/',
	php_url_options:  mainUrl + 'php/options/',
	php_url_friends:  mainUrl + 'php/friends/',
	php_url_chat:  mainUrl + 'php/chat/',
	php_url_game:  mainUrl + 'php/game/',
	php_url_shop:  mainUrl + 'php/shop/',
	php_url_group:  mainUrl + 'php/group/',
};


window.socket = openSocket('http://localhost:8000');
window.socket.on('get_new_message', async (data) => {
	if(window.location.hash.slice(0,7) === '#/chat/') {
		document.querySelector("#comments_block").innerHTML += ReactDOMServer.renderToString(<HashRouter>
			<MessageBlock info={data.info} />
			</HashRouter>);
	}
});

window.socket.on('get_new_writes', async (data) => {
	window.globalInfo.listOfWriters = data;
});




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
