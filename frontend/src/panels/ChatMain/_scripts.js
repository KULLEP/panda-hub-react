import $ from "jquery";
import { Socket } from 'react-socket-io';

export class GetInfoChat {

	url = window.globalInfo.php_url_chat;

	constructor(id_chat) {
		this.id_chat = id_chat;
	}

	/* ИНФОРМАЦИЯ О ЧАТЕ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_chat.php',
			data: {
				id_chat: this.id_chat
			},
			success: e => {
				window.globalInfo.InfoChat = JSON.parse(e);
			}
		})
		)
	}
}


export class AccessChat {

	url = window.globalInfo.php_url_chat;
	id_user = window.globalInfo.infoCurrentUser.id;

	constructor(id_chat) {
		this.id_chat = id_chat;
	}

	/* ДОСТУП К ЧАТУ */
	access() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'access_chat.php',
			data: {
				id_user: this.id_user,
				id_chat: this.id_chat
			}
		})
		)
	}
}


export class GetMessages {

	url = window.globalInfo.php_url_chat;

	constructor(id_chat) {
		this.id_chat = id_chat;
	}

	/* СПИСОК СООБЩЕНИЙ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_messages.php',
			data: {
				id_chat: this.id_chat
			},
			success: e => { 
				window.globalInfo.arrMessages = JSON.parse(e);
			}}
			)
		)
	}
}



export class GetListParticipants {

	url = window.globalInfo.php_url_chat;

	constructor(id_chat) {
		this.id_chat = id_chat;
	}

	/* ПОЛУЧИТЬ СПИСОК УЧАСТНИКОВ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_participants.php',
			data: {
				id_chat: this.id_chat
			},
			success: e => e
		}
		)
		)
	}
}



export class AddNewUserInChat {

	url = window.globalInfo.php_url_chat;

	constructor(chat_id, user_id) {
		this.chat_id = chat_id;
		this.user_id = user_id;
	}

	/* ДОБАВИТЬ УЧАСТНИКА */
	add() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'add_user.php',
			data: {
				chat_id: this.chat_id,
				user_id: this.user_id,
			},
			success: e => { console.log(e); }
		}
		)
		)
	}
}

