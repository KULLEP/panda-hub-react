import $ from "jquery";


export class GetInfoUser {

	url = window.globalInfo.php_url_user;

	constructor(id_user) {
		this.id_user = id_user;
	}

	/* ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ */
	getInfo() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_user.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				let res = JSON.parse(e);
				res.friends = res.friends === '' ? null : res.friends;
				res.friends_requests = res.friends_requests === '' ? null :  res.friends_requests;
				window.globalInfo.infoUser = res;
				return false;
			}}
			)
		)
	}
}