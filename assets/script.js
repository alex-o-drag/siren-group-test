"use strict";let header=document.querySelector("#header"),body=document.querySelector("body");function makeStikyHeader(){header.style.position="fixed",body.style.paddingTop=header.clientHeight+"px"}let headerPosEvents=["resize","load"];for(let e=0;e<headerPosEvents.length;e++)window.addEventListener(headerPosEvents[e],makeStikyHeader);let gifs=document.querySelectorAll("img[loading]"),newImg=null;for(let e=0;e<gifs.length;e++)newImg=new Image,newImg.src=gifs[e].src.replace("jpg","gif"),gifs[e].src=newImg.src;