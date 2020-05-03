import React from 'react';
import { Comment, Form, Button } from 'semantic-ui-react';
import style from './Style.module.css';

const MyComment = ({arr_comm, block_comment}) => {

	let comment_block = 'text_comm' + arr_comm.id;


	const submit_comment = () => {
		// let id_meme = arr_comm.id;
		// let comment = document.getElementById(comment_block).value;
		// let id_user = window.globalInfo.infoUser.id;
		// add_comment(id_meme, comment, id_user, block_comment);
	}

	return (


		<Comment.Group>
		{
			arr_comm.map(e => {
				let img_u = 'https://panda-hub.ru/avatars/' + e.user_id + '.png';
				let full_name = e.user_first_name + ' ' + e.user_last_name;
				let comm = e.comment;

				return (
					<Comment>
					<Comment.Avatar className={ style.userImage } src={ img_u } />
					<Comment.Content>
					<Comment.Author as='a'>{ full_name }</Comment.Author>
					<Comment.Metadata>
					<div>{ e.date_comm }</div>
					</Comment.Metadata>
					<Comment.Text>{ comm === '' ? 'Error' : comm }</Comment.Text>
					</Comment.Content>
					</Comment>
					)}
				)
		}
		<Form reply>
		<Form.TextArea id={comment_block} />
		<Button onClick={submit_comment} content='Add Reply' labelPosition='left' icon='edit' primary />
		</Form>
		</Comment.Group>


		)
}
export default MyComment;

