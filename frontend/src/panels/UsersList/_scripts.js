import $ from "jquery";


export class GetListUsers {

	url = window.globalInfo.php_url_user;

	constructor(id_last_user) {
		this.id_last_user = id_last_user;
	}

	/* СПИСОК ПОЛЬЗОВАТЕЛЕЙ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_users.php',
			data: {
				id_last_user: this.id_last_user
			},
			success: e => { 
				window.globalInfo.arrInfoUsers = JSON.parse(e);
			}}
			)
		)
	}
}