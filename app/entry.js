'use strict';
import $ from 'jquery';
const block = $('#block');

import io from 'socket.io-client';
const socket = io('http://localhost:8000');


var goo = function goo() {
  socket.emit('goo', 1);
}

var tyoki = function tyoki() {
  socket.emit('tyoki', 2);
}

var par = function par() {
  socket.emit('par', 3);
}

var rs = function rs() {
  socket.emit('reset', 4);
  document.getElementById("winorlose").innerHTML = "";
  document.getElementById("goo2").disabled = false;
  document.getElementById("par2").disabled = false;
  document.getElementById("tyoki2").disabled = false;
}

var btn_invalid = function btn_invalid() {
  document.getElementById("goo2").disabled = true;
  document.getElementById("par2").disabled = true;
  document.getElementById("tyoki2").disabled = true;
}

socket.on('reset2', (data) => {
  document.getElementById("winorlose").innerHTML = "";
  document.getElementById("goo2").disabled = false;
  document.getElementById("par2").disabled = false;
  document.getElementById("tyoki2").disabled = false;
})


socket.on('win', (data) => {
  document.getElementById("winorlose").innerHTML = "win";
});

socket.on('lose', (data) => {
  document.getElementById("winorlose").innerHTML = "lose";
});

socket.on('drow', (data) => {
  document.getElementById("winorlose").innerHTML = "drow";
});




window.goo = goo;
window.tyoki = tyoki;
window.par = par;
window.rs = rs;
window.btn_invalid = btn_invalid;