import $ from 'jquery';
import Backbone from 'backbone';
import {browserHistory} from 'react-router';
import config from '../config';

export default Backbone.Model.extend({
  initialize(){
    if(window.localStorage.getItem('user-token')){
      this.set({'user-token': window.localStorage.getItem('user-token')});
    }
  },
  url: 'https://api.backendless.com/v1/data/users',
  idAttribute: 'ownerId',
  register(first, last, username, email, password){
    this.save({ first, last, username, email, password},
      {
        url: 'https://api.backendless.com/v1/users/register',
        success: () => {
          this.login(email, password);
        }
      });
  },
  login(login, password){
    this.save(
      {login, password},
      {
        type: 'POST',
        url: 'https://api.backendless.com/v1/users/login',
        success: () => {
          this.set({login});
          window.localStorage.setItem('user-token', this.get('user-token'));
          window.localStorage.setItem('ownerId', this.get('ownerId'));
        }
      }
    );
  },
  logout() {
    $.ajax({
      url: 'https://api.backendless.com/v1/users/logout',
      success: () => {
      this.clear();
      window.localStorage.clear();
      browserHistory.push('/login');
      }
    });
  },
});
