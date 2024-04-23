"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: 
      Date:   

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);
function countdown() {
	let now = new Date();
	now.toLocaleString();
	let newYear = new Date(2024, 1, 1);
	let nextYear = newYear.getFullYear()++;
	newYear.setFullYear() = nextYear.value;
	
}