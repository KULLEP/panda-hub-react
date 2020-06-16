import React from 'react';
import style from './Style.module.css';
import { Link } from 'react-router-dom';
import ImageMy from './../ImageMy/ImageMy';
import { Icon } from 'semantic-ui-react';
import { SaveAndRenameImage, PostMeme } from './_scripts';
import { goToMainPage, goToGroup } from './../../_scripts/RedirectOnPage';

const CardAddMeme = ({id_group}) => {

	const info = window.globalInfo.infoCurrentUser;
	const id_user = window.globalInfo.infoCurrentUser.id;
	var content;
	var contentType = '.jpg';


	const setImage = () => {
		content = document.getElementById('content-meme-upload').files[0];
		if(content.type === 'video/mp4') {
			contentType = '.mp4';
		} else if (content.type === 'audio/mpeg') {
			contentType = '.mp3';
		}
	};


	const postMeme = async () => {
		let text_meme = document.getElementById('input_text_meme').value;
		let id_meme = await new PostMeme(id_user, text_meme, contentType, id_group).post();
		if(content !== undefined) {
			await new SaveAndRenameImage(id_meme, content, contentType).action();
		}
		if (id_group) {
			goToGroup(id_group);
		} else {
			goToMainPage();
		}
		
	};

	return (
		<div className={ style.card } >

		<Link to={`/user/${info.id}`} >
		<ImageMy propsType='user' propsUrl={info.id} /> 
		</Link>


		<input id='input_text_meme' type='text' placeholder='Что нового ?' className="form-control" />


		<label for="content-meme-upload" className="ml-3" >
		<Icon name='file outline' size='big' className={ style.imageInputMeme } />
		<input type="file" onChange={setImage} className='d-none' id="content-meme-upload" />
		</label>


		<label for="post-meme" className="ml-3" >
		<Icon name='location arrow' size='big' className={ style.imageInputMeme } />
		<input type="submit" onClick={postMeme} className='d-none' id="post-meme" />
		</label>





		</div>
		)

}

export default CardAddMeme;

