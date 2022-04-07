var canvas;
var context;
var timer;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
timer = setInterval(animate, interval);

var player1 = new GameObject()