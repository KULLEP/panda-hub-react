import React from 'react';
import { Route } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import LeftScroll from './components/LeftScroll/LeftScroll';
import LeftMenu from './components/LeftMenu/LeftMenu';
import MyRedirect from './components/MyRedirect';


import MemeList from './panels/MemeList/MemeList';
import User from './panels/User/User';
import Auth from './panels/Auth/Auth';
import Register from './panels/Register/Register';
import AccountApproved from './panels/Register/AccountApproved';
import AccountRecovery from './panels/AccountRecovery/AccountRecovery';
import 'semantic-ui-css/semantic.min.css';
import './main.css';
import 'bootstrap-4-react';


const App = () => {

      let email = localStorage.getItem('email');
      let password = localStorage.getItem('password');


      return (
            <div>

            <MyRedirect/>
            { 
                  email !== null && password !== null ? 
                  <div>
                  <Toolbar/>
                  <LeftScroll/>
                  <LeftMenu/>
                  </div> : null
            }
            <div className='main'>
            <div className='main-content'>
            <Route exact path='/' component={MemeList} />
            <Route exact path='/home' component={MemeList} />

            <Route exact path='/Auth' component={Auth} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/account_recovery' component={AccountRecovery} />
            <Route exact path='/account_approved' component={AccountApproved} />
            </div>

            <div className='main_user-content'>
            <Route path='/user' component={User} />
            </div>

            </div>

            </div>
            );
}

export default App;
