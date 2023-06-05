"use strict";
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();

let timer = document.querySelector(".nav--timer");
timer.textContent = `Current time: ${hours}:${minutes}`;
