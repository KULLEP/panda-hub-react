import $ from "jquery";

export class AddNewGame {

	url = window.globalInfo.php_url_game;

	constructor(id_user, name, description, image, options, url_app) {
		this.id_user = id_user;
		this.name = name;
		this.description = description;
		this.image = image;
		this.options = options;
		this.url_app = url_app;
	}

	/* СОЗДАТЬ ИГРУ */
	add() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'add_new_game.php',
			data: {
				id_user: this.id_user,
				name: this.name,
				description: this.description,
				image: this.image,
				options: this.options,
				url_app: this.url_app
			},
			success: e => e
		})
		)
	}
}