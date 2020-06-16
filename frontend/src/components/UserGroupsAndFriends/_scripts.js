import $ from "jquery";


export class GetFriends {

	url = window.globalInfo.php_url_friends;


	constructor(id_user) {
		this.id_user = id_user;
	}

	/* СПИСОК ПОСТОВ ПОЛЬЗОВАТЕЛЯ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_friends.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				console.log(JSON.parse(e));
				window.globalInfo.arrFriends = JSON.parse(e);
			}
		})
		)
	}
}

