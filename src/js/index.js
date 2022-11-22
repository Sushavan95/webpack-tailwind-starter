import '../css/style.css';

import $ from 'jquery';

// FONT AWESOME
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import "@fortawesome/fontawesome-free/js/all.js";
// import "@fortawesome/fontawesome-free/css/all.css";

// JQUERY START
$(document).ready(function () {
  $('#my-button').on('click', function () {
    console.log('Jquery working properly.');
  });
});
