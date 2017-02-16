import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    return(
      <nav>
        <h2>MyScrap</h2>
        <Link to="/">Home</Link>
        <Link to="/profile">My Profile</Link>
      </nav>
    );
  }
});
