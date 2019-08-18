import { createDom } from './modules/createDom.js'
import { gallery } from './modules/gallery-tab.js'
import { home } from './modules/home-tab.js'
import { order } from './modules/order-now-tab.js'
import { visit } from './modules/visit-tab.js'
import { hover } from './modules/social-hover.js'


// initial setup
createDom();
hover();

// cache images
[
  '../dist/img/drink.jpg',
  '../dist/img/eat.jpg',
  '../dist/img/visit.jpg',
  '../dist/img/restaurant.jpg'
].forEach(function(url){
  new Image().src = url;
});

// connect buttons to modules
let homeTab = document.querySelector('.home');
homeTab.addEventListener('click', home);
let title = document.querySelector('.title');
title.addEventListener('click', home);

let orderNow = document.querySelector('.order');
orderNow.addEventListener('click', order);
let eatMid = document.querySelector('.eat-mid');
eatMid.addEventListener('click', order);

let visitTab = document.querySelector('.visit');
visitTab.addEventListener('click', visit);
let visitMid = document.querySelector('.visit-mid');
visitMid.addEventListener('click', visit);


// mid buttons background change on hover
let eatTabMid = document.querySelector('.eat-mid');
eatTabMid.addEventListener('mouseenter', function(){
  document.body.className = 'hover-eat'
});
eatTabMid.addEventListener('mouseleave', function(){
  document.body.className = ''
});

let drinkTabMid = document.querySelector('.drink-mid');
drinkTabMid.addEventListener('mouseenter', function(){
  document.body.className = 'hover-drink'
});
drinkTabMid.addEventListener('mouseleave', function(){
  document.body.className = '';
});

let visitTabMid = document.querySelector('.visit-mid');
visitTabMid.addEventListener('mouseenter', function(){
  document.body.className = 'hover-visit'
});
visitTabMid.addEventListener('mouseleave', function(){
  document.body.className = ''
});





