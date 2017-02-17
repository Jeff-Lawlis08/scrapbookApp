import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import CreateAlbum from './components/CreateAlbum';

let index;
if(window.localStorage.getItem('user-token')){
  index = Profile;
} else {
  index = Login;
}

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={index}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/create' component={CreateAlbum}/>
    </Route>
  </Router>
);

export default router;
