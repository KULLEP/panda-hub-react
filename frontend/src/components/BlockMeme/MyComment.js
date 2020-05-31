import React from 'react';
import { Comment, Form, Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { AddNewComment } from './_scripts';
import { NavLink } from 'react-router-dom';
import ImageMy from './../ImageMy/ImageMy';

const MyComment = ({id_meme, arr_comm, block_comment}) => {

	let comment_block = 'text_comm' + id_meme;

	const submit_comment = async () => {
		let comment = document.getElementById(comment_block).value;
		let id_user = window.globalInfo.infoCurrentUser.id;
		console.log(id_meme+' '+comment+' '+id_user);
		await new AddNewComment(id_meme, comment, id_user, block_comment).add();
	}

	return (


		<Comment.Group className='p-3' >
		{
			arr_comm.map(e => {
				let full_name = e.user_first_name + ' ' + e.user_last_name;
				let comm = e.comment;
				let userLink = '/user/' + e.user_id;
				
				return (
					<Comment>
					<NavLink to={userLink}>
					<ImageMy propsType='user' propsUrl={e.user_id} className={ style.userImage } /> 
					</NavLink>

					<Comment.Content>
					<NavLink to={userLink}>
					<Comment.Author as='a'>{ full_name }</Comment.Author>
					</NavLink>

					<Comment.Metadata>
					<div>{ e.date_comm }</div>
					</Comment.Metadata>
					<Comment.Text className={ style.textComment } >{ comm === '' ? 'Error' : comm }</Comment.Text>
					</Comment.Content>
					</Comment>
					)}
				)
		}
		<Form reply>
		<Form.TextArea id={comment_block} />
		<Button onClick={submit_comment} content='Отправить' labelPosition='left' icon='edit' primary />
		</Form>
		</Comment.Group>


		)
}
export default MyComment;

