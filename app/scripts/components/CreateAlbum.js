import React from 'react';
import $ from 'jquery';

import store from '../store';
import Dropzone from 'react-dropzone';

export default React.createClass({
  getInitialState(){
    return {
      files: [],
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
    return(
      <form>
        <input type="text" ref="albumName" placeholder="Album Name"/>
        <div className="image-upload">
          <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop}>
          <span>Add Album Cover</span>
          <div>Try dropping some files here, or click to select files to upload. View Preview below.</div>
          </Dropzone>
          <div key={this.state.file}>{this.state.files.map((file, i) => <img key={i} src={file.preview} /> )}</div>
          <input type="button" onClick={this.upload} value="Upload Photo"/>
        </div>
      </form>
    );
  },
  onDrop(acceptedFiles, rejectedFiles){
    this.setState({files: acceptedFiles});
  },
  onOpenClick(){
    this.dropzone.open();
  },
  updateState(){
    this.setState({user: store.session.toJSON()});
  },
  upload(){
    let fd=new FormData();
    fd.append('upload', this.state.files[0]);
    $.ajax({
      type: 'POST',
      data: fd,
      processData: false,
      contentType: false,
      url: 'https://api.backendless.com/v1/files/'+this.state.files[0].name,
      // headers: {
      //   'application-id': config.appId,
      //   'secret-key': config.secret,
      //   'application-type': 'REST'
      // },
      success: (response)=>{
        response = JSON.parse(response);
        console.log(response.fileURL);
        store.albums.addAlbum(response.fileURL);
        browserHistory.push('/profile');
      }
    });
  },
  parse: (data)=>{
    return data.data;
  }
});
