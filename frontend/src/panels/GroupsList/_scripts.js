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