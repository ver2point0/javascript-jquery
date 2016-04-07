// welcome message variables
var greeting = "Howdy ";
var name = "Molly";
var message = ", please check your order:";

// concatenate the 3 variables
var welcome = greeting + name + message;

// create sign detail variables
var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

// get element with id of greeting
var el = document.getElementById("greeting");
// replace content of that element with personalized welcome message
el.textContent = welcome;

// get element with id of userSign the update its contents
var elSign = document.getElementById("userSign");
elSign.textContent = sign;

// get element with id of tiles then update its contents
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// get element with id of subTotal then update its contents
var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

// get element with id of shipping then update its contents
var elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

// get element with id of grandTotal then update its contents
var elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;