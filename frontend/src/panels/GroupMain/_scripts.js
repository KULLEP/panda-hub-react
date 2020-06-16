import $ from "jquery";

export class GetListMemesGroup {

	url = window.globalInfo.php_url_meme;

	constructor(id_group) {
		this.id_group = id_group;
	}

	/* СПИСОК ПОСТОВ ГРУППЫ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_meme_group.php',
			data: {
				id_group: this.id_group
			},
			success: e => { 
				window.globalInfo.arrInfoMemes = JSON.parse(e);
			}}
			)
		)
	}
}




export class GetInfoGroup {

	url = window.globalInfo.php_url_group;

	constructor(id_group) {
		this.id_group = id_group;
	}

	/* ИНФОРМАЦИЯ О ГРУППЕ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_group.php',
			data: {
				id_group: this.id_group
			},
			success: e => { 
				window.globalInfo.infoGroup = JSON.parse(e);
			}}
			)
		)
	}
}




export class AuthInGroup {

	url = window.globalInfo.php_url_group;
	id_user = window.globalInfo.infoCurrentUser.id;

	constructor(id_group) {
		this.id_group = id_group;
	}

	/* ВОЙТИ В ГРУППУ */
	auth() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'auth_in_group.php',
			data: {
				id_user: this.id_user,
				id_group: this.id_group
			},
			success: e => e
		})
		)
	}
}