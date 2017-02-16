import React from 'react';
import Nav from './Nav';

export default React.createClass({
  render(){
    return(
      <div className="app">
        <Nav/>
        {this.props.children}
      </div>
    );
  }
});
