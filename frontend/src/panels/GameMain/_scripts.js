import $ from "jquery";


export class GetInfoGame {

	url = window.globalInfo.php_url_game;

	constructor(id_game) {
		this.id_game = id_game;
	}

	/* ИНФОРМАЦИЯ О ИГРЕ */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_info_game.php',
			data: {
				id_game: this.id_game
			},
			success: e => {
				window.globalInfo.InfoGame = JSON.parse(e);
			}
		})
		)
	}
}
