import React from 'react';
import {browserHistory} from 'react-router';
import store from '../store';

import Dropzone from 'react-dropzone';

export default React.createClass({
  getInitialState(){
    return{
      user: {}
    }
  },
  componentDidMount(){
    store.session.fetch({url: 'https://api.backendless.com/v1/data/users/'+window.localStorage.getItem('ownerId')});
    store.session.on('update change', this.updateState);
  },
  componentWillUnmount(){
    store.session.off('update change', this.updateState);
  },
  render(){
    console.log(this.state);
    return(
      <main>
        <h1>Welcome {this.state.user.first},</h1>
        <input type="button" value="Create New Album" onClick={this.handleClick}/>
      </main>
    );
  },
  updateState(){
    this.setState({user: store.session.toJSON()});
  },
  handleClick(e){
    e.preventDefault();
    browserHistory.push('/create');
  }
});
