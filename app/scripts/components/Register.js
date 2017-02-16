import React from 'react';
import {Link} from 'react-router';

import store from '../store';

export default React.createClass({
  render(){
    return(
      <form id="register-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="first" placeholder="First Name"/>
        <input type="text" ref="last" placeholder="Last Name"/>
        <input type="text" ref="username" placeholder="Username"/>
        <input type="email" ref="email" placeholder="Email"/>
        <input type="password" ref="password" placeholder="Password"/>
        <input type="password" ref="confirm" placeholder="Confirm Password"/>
        <input type="submit" value="Submit"/>
        Or <Link to='/login'>login here</Link>
      </form>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let first = this.refs.first.value;
    let last = this.refs.last.value;
    let username = this.refs.username.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirm = this.refs.confirm.value;
    if(password===confirm){
      store.session.register(first, last, username, email, password);
    } else {
      alert("Passwords did not match!");
    }
  }
});
