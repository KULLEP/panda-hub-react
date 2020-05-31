import $ from "jquery";

export class GetListMemes {

	url = window.globalInfo.php_url_meme;

	/* СПИСОК ПОСТОВ */
	getMemes() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_meme.php',
			data: {},
			success: e => { 
				window.globalInfo.arrInfoMemes = JSON.parse(e);
			}}
			)
		)
	}
}