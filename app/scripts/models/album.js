import Backbone from 'backbone';

export default Backbone.model.extend({
  idAttribute: 'objectId',
  timestamp: new Date(),
  url: 'https://api.backendless.com/v1/data/albums',
});
