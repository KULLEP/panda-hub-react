import $ from "jquery";


export class GetMemesUser {

	url = window.globalInfo.php_url_meme;


	constructor(id_user) {
		this.id_user = id_user;
	}

	/* СПИСОК ПОСТОВ ПОЛЬЗОВАТЕЛЯ */
	getMemes() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_memes_user.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				window.globalInfo.arrInfoMemesUser = JSON.parse(e);
			}
		})
		)
	}
}

