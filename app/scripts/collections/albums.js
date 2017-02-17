import Backbone from 'backbone';
import Album from '../models/album';

export default Backbone.Collection.extend({
  model: Album,
  url: 'https://api.backendless.com/v1/data/albums',

  //method to save new album to server
  addAlbum({name, coverImg, ownerId, timestamp}){
    this.create(
      {name, coverImg, ownerId: window.localStorage.getItem('ownerId'), timestamp},
      {
        success: (response)=>{
          this.add({response});
        }
      }
    );
  }
});
