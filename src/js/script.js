'use strict'

/*Sticky header*/

let header = document.querySelector('#header');
let body = document.querySelector('body');

function makeStikyHeader(){

  header.style.position = 'fixed';
  body.style.paddingTop = header.clientHeight+'px';
}

let headerPosEvents = ['resize', 'load']

for(let i = 0; i < headerPosEvents.length; i++){

  window.addEventListener(headerPosEvents[i], makeStikyHeader);
}

/*Lazy gifs*/

let gifs = document.querySelectorAll('img[loading]');
let newImg = null;

for(let i = 0; i < gifs.length; i++){
  
  newImg = new Image();
  newImg.src = gifs[i].src.replace('jpg', 'gif')
  gifs[i].src = newImg.src
}


