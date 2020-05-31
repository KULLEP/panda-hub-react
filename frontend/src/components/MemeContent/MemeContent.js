import React from 'react';
import { imgLoaded, imgError } from './../../_scripts/imageOnError';
import style from './Style.module.css';
import VideoPlayer from 'react-video-js-player';

const ImageMy = ({content, contentType}) => {


	var memeContent = window.globalInfo.url_meme_content + content + contentType;
	

	/* ЗАГРУЗКА КАРТИНКИ В ПОСЛЕДНЮЮ ОЧЕРЕДЬ */
	const imgLoad = (e) => {
		imgLoaded(e.currentTarget);
	};


	/* ЕСЛИ КАРТИНКА МЕМА НЕ ЗАГРУЗИЛАТЬ */
	const imgErr = (e) => {
		imgError(e.currentTarget);
	};


	if(contentType === '.mp4') {
		return (
			<div className='d-flex'>
			<VideoPlayer
			controls={true}
			src={memeContent}
			/>	
			</div>	
			)
	} else if(contentType === '.mp3') {
		return (
			<div className='d-flex justify-content-center my-5'>
			<audio controls>
			<source src={memeContent} type="audio/mpeg" />
			Тег audio не поддерживается вашим браузером. 
			</audio>
			</div>	
			)
	} else {
		return (
			<img 
			className={ style.imgMeme }
			src={memeContent}
			onLoad={imgLoad} 
			onError={imgErr}
			alt='...'
			/>
			)
	}

}

export default ImageMy;