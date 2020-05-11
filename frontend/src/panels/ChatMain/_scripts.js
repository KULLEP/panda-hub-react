import $ from "jquery";


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

	/* ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ */
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



export class AddMessages {

	url = window.globalInfo.php_url_chat;

	constructor(id_chat, id_user, text, investment) {
		this.id_chat = id_chat;
		this.id_user = id_user;
		this.text = text;
		this.investment = investment;
	}

	/* ОТПРАВИТЬ СООБЩЕНИЕ */
	add() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'add_message.php',
			data: {
				id_chat: this.id_chat,
				id_user: this.id_user,
				text: this.text,
				investment: this.investment
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


