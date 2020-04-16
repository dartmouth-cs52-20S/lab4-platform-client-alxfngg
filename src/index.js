import $ from 'jquery';
import './style.scss';

let timer = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${timer} seconds.`);
  timer++;
}, 1000);
