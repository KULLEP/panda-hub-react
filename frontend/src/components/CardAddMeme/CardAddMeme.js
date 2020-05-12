import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import ImageMy from './../ImageMy/ImageMy';
import { Icon } from 'semantic-ui-react';
import { SaveAndRenameImage, PostMeme } from './_scripts';
import { goToMainPage } from './../../_scripts/RedirectOnPage';

const CardAddMeme = () => {

	const info = window.globalInfo.infoCurrentUser;
	const id_user = window.globalInfo.infoCurrentUser.id;
	var image;


	const setImage = () => {
		image = document.getElementById('image-meme-upload').files[0];
	};


	const postMeme = async () => {
		let text_meme = document.getElementById('input_text_meme').value;
		let id_meme = await new PostMeme(id_user, text_meme).post();
		if(image !== undefined) {
			await new SaveAndRenameImage(id_meme, image).action();
		}
		goToMainPage();
	};

	return (
		<div className={ style.card } >

		<Link to={`/user/${info.id}`} >
		<ImageMy propsType='user' propsUrl={info.id} /> 
		</Link>


		<input id='input_text_meme' type='text' placeholder='Что нового ?' className="form-control" />


		<label for="image-meme-upload" className="ml-3" >
		<Icon name='photo' size='big' className={ style.imageInputMeme } />
		<input type="file" onChange={setImage} className='d-none' id="image-meme-upload" />
		</label>


		<label for="post-meme" className="ml-3" >
		<Icon name='location arrow' size='big' className={ style.imageInputMeme } />
		<input type="submit" onClick={postMeme} className='d-none' id="post-meme" />
		</label>





		</div>
		)

}

export default CardAddMeme;

