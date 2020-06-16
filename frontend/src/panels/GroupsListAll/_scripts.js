import $ from "jquery";

export class GetListAllGroups {

	url = window.globalInfo.php_url_group;


	/* СПИСОК ГРУПП */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_all_groups.php',
			data: {},
			success: e => e
		})
		)
	}
}