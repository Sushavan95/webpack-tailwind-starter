import '../css/style.css';

import $ from 'jquery';

// JQUERY START
$(document).ready(function () {
  $('#my-button').on('click', function () {
    console.log('Jquery working properly.');
  });
});
