import $ from "jquery";

export class GetListGroups {

	url = window.globalInfo.php_url_group;
	id_user = window.globalInfo.infoCurrentUser.id;

	/* СПИСОК ГРУПП */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_groups_user.php',
			data: {
				id_user: this.id_user
			},
			success: e => e
		})
		)
	}
}





export class CreateNewGroup {

	url = window.globalInfo.php_url_group;
	id_user = window.globalInfo.infoCurrentUser.id;

	constructor(name_group) {
		this.name_group = name_group;
	}

	/* СОЗДАТЬ ГРУППУ */
	create() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'create_new_group.php',
			data: {
				id_user: this.id_user,
				name_group: this.name_group,
			},
			success: e => {console.log(e)}
		})
		)
	}
}