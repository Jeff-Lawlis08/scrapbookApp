import React from 'react';
import {Link} from 'react-router';

import store from '../store';

export default React.createClass({
  render(){
    return(
      <form id="login-form" onSubmit={this.handleSubmit}>
        <input type="email" ref="email" placeholder="Email"/>
        <input type="password" ref="password" placeholder="Password"/>
        <input type="submit" value="Submit"/>
        Or <Link to='/register'>register here</Link>
      </form>
    );
  },
  handleSubmit(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    store.session.login(email, password);
  }
});
