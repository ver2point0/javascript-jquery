// create a variable for the subtotal and make a calculation
var subtotal = (13 + 1) * 5;

// create  a variable for the shipping and make a calculation
var shipping = 0.5 * (13 + 1);

// create the total by combining the subtotal and shipping values
var total = subtotal + shipping;

// write results to the screen
var elSub = document.getElementById("subtotal");
elSub.textContent = subtotal;

var elShip = document.getElementById("shipping");
elShip.textContent = shipping;

var elTotal = document.getElementById("total");
elTotal.textContent = total;
