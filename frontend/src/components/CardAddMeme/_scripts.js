import React from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import { goToOptionsPage } from './../../_scripts/RedirectOnPage';


export class PostMeme {

	url = window.globalInfo.php_url_meme;
	
	constructor(id_user, text) { 
		this.id_user = id_user;
		this.text = text;
	}

	/* СОЗДАТЬ МЕМ */
	post = () => ( $.ajax({
		method: 'GET',
		url: this.url + 'post_meme.php',
		data: {
			id_user: this.id_user,
			text: this.text
		},
		success: e => e
	})
	)
}


export class SaveAndRenameImage {

	url = window.globalInfo.php_url_meme;

	
	constructor(id_meme, image) { 
		this.id_meme = id_meme;
		this.image = image;
	}

	/* СОХРАНИТЬ И ПЕРЕИМЕНОВАТЬ ФОТО */
	action = () => {
		var form_data = new FormData();
		form_data.append('file', this.image, this.id_meme + '.jpg');
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