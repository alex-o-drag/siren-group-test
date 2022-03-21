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