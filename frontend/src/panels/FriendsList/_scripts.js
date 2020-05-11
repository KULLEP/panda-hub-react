import $ from "jquery";


export class GetListFriends {

	url = window.globalInfo.php_url_friends;

	constructor(id_user) { 
		this.id_user = id_user;
	}

	/* СПИСОК МЕМОВ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_friends.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				window.globalInfo.arrInfoFriends = JSON.parse(e);
			}}
			)
		)
	}
}