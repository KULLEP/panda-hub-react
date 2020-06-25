import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import LeftScroll from './components/LeftScroll/LeftScroll';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MyRedirect from './components/MyRedirect';

import MemeList from './panels/MemeList/MemeList';
import FriendsList from './panels/FriendsList/FriendsList';
import FriendsRequestsList from './panels/FriendsList/FriendsRequestsList';
import GroupsList from './panels/GroupsList/GroupsList';
import GroupsListAll from './panels/GroupsListAll/GroupsListAll';
import UsersList from './panels/UsersList/UsersList';
import GamesList from './panels/GamesList/GamesList';
import Developer from './panels/Developer/Developer';
import User from './panels/User/User';
import Auth from './panels/Auth/Auth';
import Register from './panels/Register/Register';
import AccountApproved from './panels/Register/AccountApproved';
import AccountRecovery from './panels/AccountRecovery/AccountRecovery';
import GameMain from './panels/GameMain/GameMain';
import GroupMain from './panels/GroupMain/GroupMain';
import ChatsList from './panels/ChatsList/ChatsList';
import Options from './panels/Options/Options';
import ChatMain from './panels/ChatMain/ChatMain';
import Shop from './panels/Shop/Shop';
import OptionsLeftMenu from './panels/Options/OptionsLeftMenu';
import { GetInfoCurrentUser } from './_scripts/ActionsWithUser';
import 'semantic-ui-css/semantic.min.css';
import './main.css';
import 'bootstrap-4-react';


const App = () => {

  const [popout, setPopout] = useState('');
  let email = localStorage.getItem('email');
  let password = localStorage.getItem('password');
  let info = window.globalInfo.infoCurrentUser;

  useEffect(() => {
    async function fetchRequest() {
      if(!!email && !!password) {
       await new GetInfoCurrentUser(email, password).getInfo();

       /* КОЛ-ВО ЗАПРОСОВ В ДРУЗЬЯ */
       let num_req_fr = window.globalInfo?.infoCurrentUser?.friends_requests;
       num_req_fr = (num_req_fr === '' || num_req_fr === '[]' || num_req_fr === null || num_req_fr === undefined) ? '' : JSON.parse(num_req_fr).length; 
       window.globalInfo.countFriendsRequest = num_req_fr;
     }     
     setPopout(null);        
   }
   fetchRequest();
 });


  useEffect(() => {
    const timer = setInterval(() => {
     async function fetchRequest() {
      if(!!email && !!password) {
       await new GetInfoCurrentUser(email, password).getInfo();
       /* КОЛ-ВО ЗАПРОСОВ В ДРУЗЬЯ */
       let num_req_fr = window.globalInfo?.infoCurrentUser?.friends_requests;
       num_req_fr = (num_req_fr === '' || num_req_fr === '[]' || num_req_fr === null || num_req_fr === undefined) ? '' : JSON.parse(num_req_fr).length; 
       window.globalInfo.countFriendsRequest = num_req_fr;
     }           
   }
   fetchRequest();
 }, 5000);

    return () => clearInterval(timer);
  });



  return (
    <div>

    <MyRedirect/>

    {
      ( !!email && !!password ) ?  
      <div>
      <Toolbar id_user={info.id} name={info.first_name} /> 
      <LeftScroll info={info} />
      <LeftMenu info={info} /> 
      </div> 
      : null
    }

    {
      popout !== null ?  null :
      <div className='main'>
      <div className='main-content'>
      <Route exact path='/' component={MemeList} />
      <Route exact path='/news' component={MemeList} />

      <Route exact path='/auth' component={Auth} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/account_recovery' component={AccountRecovery} />
      <Route exact path='/account_approved' component={AccountApproved} />
      <Route exact path='/options' component={Options} />
      <Route exact path='/options_left_menu' component={OptionsLeftMenu} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/groups_list' component={GroupsList} />
      <Route exact path='/groups_all' component={GroupsListAll} />
      </div>

      <div className='main_user-content'>
      <Route path='/user/:number' component={User} />
      </div>

      <div className='main_users-list'>
      <Route exact path='/friends' component={FriendsList} />
      <Route exact path='/friends_requests' component={FriendsRequestsList} />
      <Route exact path='/users_list' component={UsersList} />
      <Route exact path='/games_list' component={GamesList} />
      <Route exact path='/chats_list' component={ChatsList} />
      <Route exact path='/chat/:number' component={ChatMain} />
      <Route exact path='/game/:number' component={GameMain} />
      <Route exact path='/group/:number' component={GroupMain} />
      <Route exact path='/developer' component={Developer} />
      </div>


      </div>
    }


    </div>
    );
}

export default App;
