import $ from "jquery";

export class GetListUsersSearch {

	url = window.globalInfo.php_url_user;

	constructor(name) {
		this.name = name;	
	}
	
	/* СПИСОК ПОЛЬЗОВАТЕЛЕЙ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_users_search.php',
			data: {
				name: this.name
			},
			success: e => { 
				window.globalInfo.arrInfoUsersSearch = JSON.parse(e);
			}}
			)
		)
	}
}