import $ from "jquery";


// ЗАГРУЗКА ИЗОБРАЖЕНИЙ В ПОСЛЕДНЮЮ ОЧЕРЕДЬ
export const imgLoaded = (img) => {
	var $img = $(img);
	$img.parent().addClass('loaded');
};



// ЗАГРУЗКА АЛЬТЕРНАТИВНОГО ИЗОБРАЖЕНИЯ
export const imgError = (image) => {
	image.onerror = "";
	image.src = "file:///C:/Users/Максим/Desktop/img_meme.jpg";
	return true;
};



// ЗАГРУЗКА АЛЬТЕРНАТИВНОГО ИЗОБРАЖЕНИЯ ПОЛЬЗОВАТЕЛЯ
export const imgErrorUser = (image) => {
	image.onerror = "";
	image.src = "https://cdn.freelance.ru/img/portfolio/pics/00/31/8F/3248032.jpg?mt=8292be28";
	return true;
};