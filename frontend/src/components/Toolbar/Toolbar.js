import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import style from './Style.module.css';

const Toolbar = () => (
	<div className={ style.header } >

	<div  className={ style.content }>

	<div className={ style.logo } >PH</div>

	<Menu.Item className={ style.search } >
	<Input className={ style.inputSearch } icon='search' placeholder='Поиск...' />
	</Menu.Item>


	<div className={ style.nameBlock }>
	<span>Na12dd21me</span>
	<img src='http://i1.ytimg.com/vi/fpRYL4wBFc4/maxresdefault.jpg' alt='...' />
	</div>

	</div>
	</div>
	)

export default Toolbar
