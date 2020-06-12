import React from 'react';
import $ from "jquery";
import ReactDOM from 'react-dom';
import MyComment from './../../components/BlockMeme/MyComment';
import { Button } from 'semantic-ui-react';
import { HashRouter } from 'react-router-dom';


export class GetListComments {

	url = window.globalInfo.php_url_meme;

	constructor(id_meme, block_comment) { 
		this.id_meme = id_meme;
		this.block_comment = block_comment;
	}

	closeComments() {
		ReactDOM.render(null ,document.getElementById(this.block_comment))
	}

	/* СПИСОК КОММЕНТАРИЕВ	 */
	getComments() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_comments.php',
			data: {
				id_meme: this.id_meme,
				block_comment: this.block_comment
			},
			success: e => { 
				ReactDOM.render(
					<HashRouter>
					<MyComment id_meme={this.id_meme} arr_comm={JSON.parse(e)} block_comment={this.block_comment} />
					</HashRouter>
					,document.getElementById(this.block_comment)
					)}
			})
		)
	}
}




export class AddNewComment {

	url = window.globalInfo.php_url_meme;

	constructor(id_meme, comment, id_user, block_comment) { 
		this.id_meme = id_meme;
		this.comment = comment;
		this.id_user = id_user;
		this.block_comment = block_comment;
	}

	/* СОЗДАТЬ НОВЫЙ КОММЕНТАРИЙ */
	add() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'add_comment.php',
			data: {
				id_meme: this.id_meme,
				comment: this.comment,
				id_user: this.id_user
			},
			success: async e => { 
				await new GetListComments(this.id_meme, this.block_comment).getComments();
			}
		})
		)
	};
}



export class AddOrDelLike {

	url = window.globalInfo.php_url_meme;
	id_user = window.globalInfo.infoCurrentUser.id;

	constructor(id_meme, is_like, id_block) { 
		this.id_meme = id_meme;
		this.is_like = is_like;
		this.id_block = id_block;
	}

	/* ЛАЙК */
	actionLike(e) {

		return ( $.ajax({
			method: 'GET',
			url: this.url + 'like.php',
			data: {
				id_meme: this.id_meme,
				is_like: this.is_like,
				id_user: this.id_user
			},
			success: e => { 
				if(this.is_like === 'true') {
					localStorage.removeItem(this.id_block);
					ReactDOM.render(
						<Button
						color='red'
						content={<span>Нравится</span>}
						icon='heart outline'
						label={{ basic: true, color: 'red', pointing: 'left', content: e }}
						/>
						,document.getElementById(this.id_block)
						);
				} else {
					localStorage.setItem(this.id_block, 'true');
					ReactDOM.render(
						<Button
						color='red'
						content={<span>Нравится</span>}
						icon='heart'
						label={{ basic: true, color: 'red', pointing: 'left', content: e }}
						/>
						,document.getElementById(this.id_block)
						);	
				}
			}}
			)
		)
	}
}



export class GetUsersLikesMeme {

	url = window.globalInfo.php_url_meme;

	constructor(id_meme) { 
		this.id_meme = id_meme;
	}

	/* ПОЛУЧИТЬ СПИСОК ПОЛЬЗОВАТЕЛЕЙ ПОСТАВИВШИХ ЛАЙК */
	get() {
		return ( $.ajax({
			method: 'GET',
			url: this.url + 'get_users_likes_meme.php',
			data: {
				id_meme: this.id_meme
			},
			success: e => e
		})
		)
	};
}