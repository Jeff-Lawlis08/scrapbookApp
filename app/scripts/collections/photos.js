import Backbone from 'backbone';
import Photo from '../models/photo';

export default Backbone.Collection.extend({
  model: Photo,
  url: 'https://api.backendless.com/v1/data/photos',

  addPhoto(fileURL){
    this.create({url: fileURL, ownerId: window.localStorage.getItem('ownerId')});
  }
});
