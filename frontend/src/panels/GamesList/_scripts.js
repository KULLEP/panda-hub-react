import $ from "jquery";


export class GetListGames {

	url = window.globalInfo.php_url_game;


	/* СПИСОК ИГР */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_list_games.php',
			data: {},
			success: e => { 
				window.globalInfo.arrInfoGames = JSON.parse(e);
			}}
			)
		)
	}
}