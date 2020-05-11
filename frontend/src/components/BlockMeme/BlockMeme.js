import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { GetListComments, AddOrDelLike } from './_scripts';
import ImageMy from './../ImageMy/ImageMy';


const BlockMeme = ({info}) => {


	let likes = info.likes;
	let repost = info.repost;

	likes = ( likes === '' ) ? 0 : likes;
	repost = ( repost === '' ) ? 0 : repost;


	let meme_block = 'meme_' + info.id;
	let like_block = 'like_' + info.id;
	let comments_block = 'comment_' + info.id;
	let is_like = localStorage.getItem(like_block);


	const get_comments = async () => {
		let status = document.getElementById(comments_block).className ;	

		if(status  === 'active') {	 
			new GetListComments(info.id, comments_block).closeComments();
			document.getElementById(comments_block).className  = '';
		} else {
			await new GetListComments(info.id, comments_block).getComments();
			document.getElementById(comments_block).className  = 'active';
		}	
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

		<Link to={`/user/${info.user_id}`} >
		<ImageMy propsType='user' propsUrl={info.user_id} /> 
		</Link>


		<Link to={`/user/${info.user_id}`} >
		<span>{info.user_first_name} {info.user_last_name}</span>
		</Link>


		<Card.Meta className={style.postDate} >
		<span>{info.date}</span>
		</Card.Meta>

		</Card.Header>


		<Card.Content>	 
		{info.image_text}
		</Card.Content>

		<ImageMy id={meme_block} propsType='meme' propsUrl={info.image} /> 
		
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
