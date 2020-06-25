import $ from "jquery";


export class GetListChats {

	url = window.globalInfo.php_url_chat;
	id = window.globalInfo.infoCurrentUser.id;


	/* СПИСОК ЧАТОВ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_chats.php',
			data: {
				id_user: this.id
			},
			success: e => { 
				window.globalInfo.arrInfoChatsList = JSON.parse(e);
			}}
			)
		)
	}
}



export class CreateNewChats {

	url = window.globalInfo.php_url_chat;
	id = window.globalInfo.infoCurrentUser.id;

	constructor(name_chat) {
		this.name_chat = name_chat;
	}

	/* СОЗДАТЬ НОВЫЙ ЧАТ */
	create() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'create_new_chat.php',
			data: {
				id_user: this.id,
				name_chat: this.name_chat
			}}
			)
		)
	}
}