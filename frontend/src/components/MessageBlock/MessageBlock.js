import React from 'react';
import { Link } from 'react-router-dom';
import { Comment } from 'semantic-ui-react';
import style from './Style.module.css';
import ImageMy from './../ImageMy/ImageMy';

const MessageBlock = ({info}) => {

	return (
		<Comment className={ style.commentBlock } >
		<Link to={`/user/${info.id_user}`} >
		<ImageMy propsUrl={info.id_user} propsType='user' />
		</Link>
		<Comment.Content>
		<Link to={`/user/${info.id_user}`} >
		<Comment.Author as='a'>{info.first_name} {info.last_name}</Comment.Author>
		</Link>
		<Comment.Metadata>
		<div>{info.date}</div>
		</Comment.Metadata>
		<Comment.Text>{info.text}</Comment.Text>
		<Comment.Actions>
		</Comment.Actions>
		</Comment.Content>
		</Comment>
		)
}
export default MessageBlock;
