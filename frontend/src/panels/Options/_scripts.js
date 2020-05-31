import $ from "jquery";
import { goToOptionsPage } from './../../_scripts/RedirectOnPage';

export class EditOptions {

	url = window.globalInfo.php_url_options;

	constructor(id_user, first_name, last_name, nickname, country,  status, city, age, sex) { 
		this.id_user = id_user;
		this.first_name = first_name;
		this.last_name = last_name;
		this.nickname = nickname;
		this.country = country;
		this.status = status;		 
		this.city = city;
		this.age = age;
		this.sex = sex;
	}

	/* АВТОРИЗАЦИЯ */
	edit = () => {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'save_options.php',
			data: {
				id_user: this.id_user,
				first_name: this.first_name,
				last_name: this.last_name,
				nickname: this.nickname,
				country: this.country,
				status: this.status,
				city: this.city,
				age: this.age,
				sex: this.sex
			},
			success: e => { 
				console.log(e);
			}
		})
		)
	};
}



export class EditOptionsLeftMenu {

	url = window.globalInfo.php_url_options;

	constructor(id_user, arr_value) { 
		this.id_user = id_user;
		this.arr_value = JSON.stringify(arr_value);
	}


	/* АВТОРИЗАЦИЯ */
	edit = () => {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'save_options_left_menu.php',
			data: {
				id_user: this.id_user,
				arr_value: this.arr_value
			},
			success: e => { 
				// console.log(e);
			}
		})
		)
	};
}


export class SaveImage {

	url = window.globalInfo.php_url_options;
	id_user = window.globalInfo.infoCurrentUser.id;
	
	constructor(image) { 
		this.image = image;
	}

	/* СОХРАНЕНИЕ КАРТИНКИ */
	save = () => {
		var form_data = new FormData();
		form_data.append('file', this.image, this.id_user + '.jpg');
		return ( $.ajax({
			url: this.url + 'save_image.php',
			dataType: 'text',
			cache: false,
			contentType: false,
			processData: false,
			data:  form_data,
			type: 'POST',
			success: function(e){
				goToOptionsPage();
			}
		})
		)
	};
}
