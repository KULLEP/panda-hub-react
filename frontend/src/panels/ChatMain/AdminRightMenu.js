import React  from 'react';
import style from './Style.module.css';
import { Button, Modal } from 'semantic-ui-react';
import KickUserFromChatModal from './KickUserFromChatModal';
import InviteFriendsModal from './InviteFriendsModal';

const AdminRightMenu = ({id_chat, id_user}) => {



	return (

		<div className={ style.admin_right_menu } >
		<Modal
		className={ style.modal }
		trigger={<Button color='green' className={ style.buttonRightMenu }>Пригласить</Button>}
		header='Друзья'
		content={<InviteFriendsModal id_user={id_user} />}
		actions={['Отмена']}
		/>

		<Modal
		className={ style.modal }
		trigger={<Button color='green' className={ style.buttonRightMenu }>Выгнать</Button>}
		header='Участники чата'
		content={<KickUserFromChatModal id_chat={id_chat} />}
		actions={['Отмена']}
		/>

		</div>	 

		)
}


export default AdminRightMenu;
