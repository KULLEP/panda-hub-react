import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Card, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { GetListComments, AddOrDelLike, Repost } from './_scripts';
import ImageMy from './../ImageMy/ImageMy';
import MemeContent from './../MemeContent/MemeContent';
import ListUsersLikes from './ListUsersLikes';


const BlockMeme = ({info}) => {

	let likes = info.likes;
	let repost = info.reposts;


	likes = ( likes === '' ) ? 0 : likes;
	repost = ( repost === '' ) ? 0 : repost;
	const [reposts, setRepost] = useState(repost);


	let like_block = 'like_' + info.id;
	let above_like_block = 'above_like_block' + info.id;
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


	
	/* РЕПОСТ */
	const onClickRepost = async (e, data) => {
		let countRepost = await new Repost(info.id).add();
		setRepost(countRepost);
	};





	/* ПРИ НАВЕДЕНИИ НА ЛАЙК */
	const mouse_over_on_like = (e) => {
		let this_block = e.currentTarget;
		let y_pos = document.getElementById(this_block.id).offsetTop;
		y_pos = y_pos - 60;
		document.getElementById(above_like_block).style.display = 'block';
		document.getElementById(above_like_block).style.top = `${y_pos}px`;
		setTimeout(() => {
			ReactDOM.render(
				<ListUsersLikes id_meme={info.id} above_like_block={above_like_block} />
				,document.getElementById(above_like_block)
				);
		}, 300);
	}






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
		{info.text}
		</Card.Content>

		<MemeContent content={info.id} contentType={info.content_type} /> 
		
		<div id={above_like_block} className={ style.above_like_block }></div>

		<Card.Content className={style.iconBlockContent} >

		{ 
			( is_like !== 'true')  ?
			<div onMouseOver={mouse_over_on_like} id={like_block} data-id-meme={info.id} onClick={clickLike} className={ style.iconText } >
			<Button
			color='red'
			content={<span>Нравится</span>}
			icon='heart outline'
			label={{ basic: true, color: 'red', pointing: 'left', content: likes }}
			/>
			</div>
			:
			<div onMouseOver={mouse_over_on_like} id={like_block} data-id-meme={info.id} onClick={clickLike} className={ style.iconText } >
			<Button
			color='red'
			content={<span>Нравится</span>}
			icon='heart'
			label={{ basic: true, color: 'red', pointing: 'left', content: likes }}
			/>
			</div>
		}

		<div onClick={get_comments} className={ style.iconText }>
		<Button
		color='black'
		content={<span>Комментарии</span>}
		icon='comments'
		label={{ basic: true, color: 'black', pointing: 'left', content: '...' }}
		/>
		</div>


		<div className={ style.iconText }>
		<Button
		onClick={onClickRepost}
		basic
		color='blue'
		content={<span>Поделиться</span>}
		icon='fork'
		label={{
			as: 'a',
			basic: true,
			color: 'blue',
			pointing: 'left',
			content: reposts,
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
