import React from 'react';
import { Redirect } from 'react-router-dom';


const MyRedirect = () => {

/*

0 - Не переадресовывать
1 - Переадресация на страницу с кодом подтверждения
2 - Переадресация на страницу с авторизацией

*/

let email = localStorage.getItem('email');
let password = localStorage.getItem('password');
let email_access = localStorage.getItem('email_access');
let res_red = 0;

/* ЕСЛИ СОЗДАЛ АККАУНТ */
if(email_access !== null) {
	res_red = 1;
}
else if(email === null && password === null) {
	res_red = 2;
}

return  (
	<div>
	{
		( res_red === 1 ) ? <Redirect from='/' to='/account_approved'/> : null 
	}
	{
		( res_red === 2 ) ? <Redirect from='/' to='/auth'/> : null 
	}
	</div>
	)
}
export default MyRedirect;
