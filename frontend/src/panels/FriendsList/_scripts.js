import $ from "jquery";


export class GetListFriends {

	url = window.globalInfo.php_url_friends;

	constructor(id_user) { 
		this.id_user = id_user;
	}

	/* ПОЛУЧИТЬ СПИСОК ДРУЗЕЙ */
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



export class GetListFriendsRequests {

	url = window.globalInfo.php_url_friends;

	constructor(id_user) { 
		this.id_user = id_user;
	}

	/* ПОЛУЧИТЬ СПИСОК ЗАЯВОК В ДРУЗЬЯ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_requests_friends.php',
			data: {
				id_user: this.id_user
			},
			success: e => { 
				window.globalInfo.arrInfoFriendsRequests = JSON.parse(e);
			}}
			)
		)
	}
}



export class PostNewArrReqFriends {

	url = window.globalInfo.php_url_friends;

	constructor(id_user, arr) { 
		this.id_user = id_user;
		this.arr = arr;
	}

	/* ОБНОВИТЬ СПИСОК ЗАЯВОК В ДРУЗЬЯ */
	post() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'post_new_arr_req_friends.php',
			data: {
				id_user: this.id_user,
				arr: this.arr
			},
			success: e => { 				
				/* console.log(e); */
			}}
			)
		)
	}
}


export class AddNewFriend {

	url = window.globalInfo.php_url_friends;

	constructor(id_user, id_friend) { 
		this.id_user = id_user;
		this.id_friend = id_friend;
	}

	/* ДОБАВИТЬ НОВОГО ДРУГА */
	post() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'add_new_friend.php',
			data: {
				id_user: this.id_user,
				id_friend: this.id_friend
			},
			success: e => { 
				/* console.log(e); */
			}}
			)
		)
	}
}