"use strict"

/*Sticky header*/

let header = document.querySelector('#header');
let body = document.querySelector('body');

function makeStikyHeader(){

  header.style.position = 'fixed';
  body.style.paddingTop = header.clientHeight+'px';
}

['resize', 'load'].forEach((event) => {

  window.addEventListener(event, makeStikyHeader);
});


/*Lazy gifs*/

let gifs = document.querySelectorAll('img[loading]');
let newImg = null;


function setGifs(){
  
  gifs.forEach((img) => {

    newImg = new Image();
    newImg.src = img.src.replace('jpg', 'gif')
    img.src = newImg.src
  });
  
  newImg = null;
}

window.addEventListener('load', setGifs)


