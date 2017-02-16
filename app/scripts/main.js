import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import $ from 'jquery';
import config from './config';

const container = document.getElementById('container');

$(document).ajaxSend((evt, xhr, opts) => {
  if(opts.url.indexOf('backendless')>-1) {
    // console.log('intercepted');

    xhr.setRequestHeader('application-id', config.appId);
    xhr.setRequestHeader('secret-key', config.secret);
    xhr.setRequestHeader('application-type', 'REST');
  }
});

ReactDom.render(router, container);
