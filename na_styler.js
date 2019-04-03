"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Anthony Arias
   Date:   4/2/19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/

window.addEventListener("load", setStyles);
//this allows one of five fancy style sheets to be randomly used when the page is opened
function setStyles() {
      var styleNum = randInt(5);
      var fancy = document.createElement("link");
      fancy.setAttribute("rel", "stylesheet");
      fancy.setAttribute("id", "fancySheet");
      fancy.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancy);

      //this allows users to be able to choose between the five fancy style sheet themes she has created by clicking thumbnail images from a figure box
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      //this populates the figure box w/ preview images of the 5 fancy style sheets.
      for (var i = 0; i <= 4; i++) {
            var sheetIMG = document.createElement("img");
            sheetIMG.setAttribute("src", "na_small_" + i + ".png");
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css");

            // this makes v
            sheetIMG.onclick = function (e) {
                  fancy.setAttribute("href", e.target.alt);

            }
            figBox.appendChild(sheetIMG);
      }
}

//this code adds appearence of the thumbnail figure box.
var thumbStyles = document.createElement("style");
document.head.appendChild(thumbStyles);

document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs { \
      position: absolute; \
      left: 0px; \
      bottom: 0px; \
      }", 0);
document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs img { \
            outline: 1px solid black; \
            cursor: pointer; \
            opacity: 0.75; \
      }", 0);
document.styleSheets[document.styleSheets.length - 1].insertRule(
      "figure#styleThumbs img:hover { \
            outline: 1px solid red; \
            opacity: 1.0; \
      }", 0)



function randInt(size) {
      return Math.floor(size * Math.random());
}