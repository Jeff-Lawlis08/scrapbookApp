import React from 'react';
import store from '../store';

import Dropzone from 'react-dropzone';

export default React.createClass({
  getInitialState(){
    return{
      user: {},
      files: []
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
        <form onSubmit={this.handleSubmit}>
          <span>Create a New Album</span>
          <input type="text" placeholder="Album Name"/>
          <input type="submit" value="Submit"/>
        </form>
      </main>
    );
  },
  updateState(){
    this.setState({user: store.session.toJSON()});
  }
});
