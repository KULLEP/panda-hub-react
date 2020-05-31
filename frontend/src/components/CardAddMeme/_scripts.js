import $ from "jquery";

export class PostMeme {

	url = window.globalInfo.php_url_meme;
	
	constructor(id_user, text, contentType) { 
		this.id_user = id_user;
		this.text = text;
		this.contentType = contentType;
	}

	/* СОЗДАТЬ МЕМ */
	post = () => ( $.ajax({
		method: 'GET',
		url: this.url + 'post_meme.php',
		data: {
			id_user: this.id_user,
			text: this.text,
			contentType: this.contentType
		},
		success: e => e
	})
	)
}


export class SaveAndRenameImage {

	url = window.globalInfo.php_url_meme;
	
	constructor(id_meme, content, contentType) { 
		this.id_meme = id_meme;
		this.content = content;
		this.contentType = contentType;
	}

	/* СОХРАНИТЬ И ПЕРЕИМЕНОВАТЬ КОНТЕНТ МЕМА */
	action = () => {
		var form_data = new FormData();
		form_data.append('file', this.content, this.id_meme + this.contentType);
		return ( $.ajax({
			url: this.url + 'save_image.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data:  form_data,
			type: 'POST'
		})
		)
	};
}