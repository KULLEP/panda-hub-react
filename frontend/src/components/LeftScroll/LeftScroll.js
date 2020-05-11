	import React from 'react';
	import style from './Style.module.css';
	import { Icon } from 'semantic-ui-react'

	const LeftScroll = () => {



		const goScroll = () => {
			let position = window.pageYOffset;
			if(position > 200) {
				window.globalInfo.positionYForBack = window.pageYOffset;
				window.scrollTo(0, 0);
			} else {
				window.scrollTo(0, window.globalInfo.positionYForBack);
			}
		}

	window.addEventListener('scroll', e => {
		let position = window.pageYOffset;
		let block = style.block;

		if(position > 200) {
			document.getElementById('scroll_text_up_1').style.display = 'block'; 
			document.getElementById('scroll_text_up_2').style.display = 'none';
			document.querySelector('.' + block).style.display = 'block';
		} else {
			document.getElementById('scroll_text_up_1').style.display = 'none'; 
			document.getElementById('scroll_text_up_2').style.display = 'block';
		}

	});




	return (
	<div onClick={goScroll} className={ style.block }> 
	<p id='scroll_text_up_1' className={ style.text } ><Icon name='angle up' />НАВЕРХ</p>
	<p id='scroll_text_up_2' className={ style.text } ><Icon name='angle down' /></p>
	</div>
	)
}

export default LeftScroll;
