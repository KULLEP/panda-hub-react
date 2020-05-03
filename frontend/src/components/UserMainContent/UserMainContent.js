import React, { useEffect } from 'react';
import style from './Style.module.css';
import BlockMeme from'./../BlockMeme/BlockMeme';
import { GetListMemes } from './../../panels/MemeList/_scripts';

const UserMainContent = ({info}) => {

	var arr_memes = [{
		date: "08 янв 2020",
		dislikes: undefined,
		id: "151",
		id_group: "0",
		id_user: "1",
		image: "https://s1.1zoom.me/big3/297/Canada_Mountains_Scenery_488936.jpg",
		image_text: "dqwdqdqwwqddwqwqd",
		likes: "24",
		repost: "0"
	},
	{
		date: "08 янв 2020",
		dislikes: undefined,
		id: "151",
		id_group: "0",
		id_user: "1",
		image: "https://s1.1zoom.me/big3/297/Canada_Mountains_Scenery_488936.jpg",
		image_text: "dqwdqdqwwqddwqwqd",
		likes: "24",
		repost: "0"
	}];

	console.log(arr_memes);

	useEffect(() => {
		async function fetchRequest() {
			await new GetListMemes().getMemes();
			}
			fetchRequest();
		}, []);


			return (
				<div className={ style.content } >

				{
					arr_memes.map(el => (
						<BlockMeme info={el} />
						))
				}

				</div>
				)
		}
		export default UserMainContent
