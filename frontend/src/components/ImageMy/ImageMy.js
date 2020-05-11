import React from 'react';
import { imgLoaded, imgErrorUser, imgError } from './../../_scripts/imageOnError';
import style from './Style.module.css';


const ImageMy = ({propsUrl, propsType, id, className}) => {


	var img_url = '';
	var classNameStyle = '';
	var ImgErrAction;

	/* ЗАГРУЗКА КАРТИНКИ В ПОСЛЕДНЮЮ ОЧЕРЕДЬ */
	const imgLoad = (e) => {
		imgLoaded(e.currentTarget);
	};

	/* ЕСЛИ КАРТИНКА ПОЛЬЗОВАТЕЛЯ НЕ ЗАГРУЗИЛАТЬ */
	const imgErrUser = (e) => {
		imgErrorUser(e.currentTarget);
	};

	/* ЕСЛИ КАРТИНКА МЕМА НЕ ЗАГРУЗИЛАТЬ */
	const imgErr = (e) => {
		imgError(e.currentTarget);
	};

	id = !!id ? id : '';



	if(propsType === 'user') {
		img_url = window.globalInfo.url_avatar + propsUrl + '.jpg';
		ImgErrAction = imgErrUser;
	} else if (propsType === 'meme') {
		classNameStyle = style.imgMeme;
		img_url = propsUrl;
		ImgErrAction = imgErr;
	} else if(propsType === 'chat') {
		img_url = propsUrl;
		ImgErrAction = imgErrUser;
	} else if(propsType === 'game') {
		img_url = propsUrl;
		ImgErrAction = imgErrUser;
	} else {
		img_url = window.globalInfo.url_avatar + propsUrl + '.jpg';
		ImgErrAction = imgErrUser;
	}

	className = !!className ? className : classNameStyle;





	return (
		<img 
		id={id}
		className={className}
		src={img_url}
		onLoad={imgLoad} 
		onError={ImgErrAction}
		alt='...'
		/>
		)
}
export default ImageMy;
