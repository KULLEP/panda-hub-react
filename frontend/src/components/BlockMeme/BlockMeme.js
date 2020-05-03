import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { imgLoaded, imgErrorUser, imgError } from './../../_scripts/imageOnError';
import { GetListComments, AddOrDelLike } from './_scripts';


const BlockMeme = ({info}) => {

	let likes = info.likes;
	let repost = info.repost;

	likes = ( likes === '' ) ? 0 : likes;
	repost = ( repost === '' ) ? 0 : repost;

	let user_block = 'user_' + info.user_id + '_meme_' + info.id;
	let meme_block = 'meme_' + info.id;
	let like_block = 'like_' + info.id;
	let comments_block = 'comment_' + info.id;
	let is_like = localStorage.getItem(like_block);

	let user_link = '#/user/'+info.id_user;

	let img_u = 'https://panda-hub.ru/avatars/' + info.user_id + '.png';
	let img_post = info.image;

	const imgLoad = (e) => {
		imgLoaded(e.currentTarget);
	}

	/* ЕСЛИ КАРТИНКА ПОЛЬЗОВАТЕЛЯ НЕ ЗАГРУЗИЛАТЬ */
	const imgErrUser = (e) => {
		imgErrorUser(e.currentTarget);
	}

	/* ЕСЛИ КАРТИНКА МЕМА НЕ ЗАГРУЗИЛАТЬ */
	const imgErr = (e) => {
		imgError(e.currentTarget);
	}




	const get_comments = async () => {
		await new GetListComments(info.id, comments_block).getComments();
	};



	/* ЛАЙК */
	const clickLike = async (e) => {
		let id_block = e.currentTarget.id;
		let id_meme = e.currentTarget.dataset.idMeme;
		let is_like = localStorage.getItem(id_block);
		await new AddOrDelLike(id_meme, is_like, id_block).actionLike();
	};

	return (
		<Card className={ style.block } >
		<Card.Header className={ style.header } >

		<a id={user_block} href={user_link} >
		<img
		src={img_u}
		onLoad={imgLoad}
		onError={imgErrUser}
		alt='...'
		/> 
		</a>

		<span>{info.user_first_name} {info.user_last_name}</span>

		<Card.Meta className={style.postDate} >
		<span>{info.date}</span>
		</Card.Meta>

		</Card.Header>


		<Card.Content>	 
		{info.image_text}
		</Card.Content>

		<Image
		id={meme_block}
		src={img_post}
		onLoad={imgLoad} onError={imgErr}
		wrapped ui={false} /> 





		<Card.Content className={style.iconBlockContent} >

		{ ( is_like !== 'true')  ?
		<div id={like_block} data-id-meme={info.id} onClick={clickLike} className={ style.iconText } >
		<Button
		color='red'
		content='Нравится'
		icon='heart outline'
		label={{ basic: true, color: 'red', pointing: 'left', content: likes }}
		/>
		</div>
		:
		<div id={like_block} data-id-meme={info.id} onClick={clickLike} className={ style.iconText } >
		<Button
		color='red'
		content='Нравится'
		icon='heart'
		label={{ basic: true, color: 'red', pointing: 'left', content: likes }}
		/>
		</div>
	}



	<div onClick={get_comments} className={ style.iconText }>
	<Button
	color='black'
	content='Комментарии'
	icon='comments'
	label={{ basic: true, color: 'black', pointing: 'left', content: '...' }}
	/>
	</div>


	<div className={ style.iconText }>
	<Button
	basic
	color='blue'
	content='Поделиться'
	icon='fork'
	label={{
		as: 'a',
		basic: true,
		color: 'blue',
		pointing: 'left',
		content: repost ,
	}}
	/>
	</div>

	</Card.Content>

	<Card.Content id={comments_block} >

	</Card.Content>

	</Card>
	)
}
export default BlockMeme;
