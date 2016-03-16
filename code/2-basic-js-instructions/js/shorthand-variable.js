// approach 1
var price = 5;
var quantity = 4;
var total = price * quantity;

// approach 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

// approach 3
var price = 5, quantity = 14;
var total = price * quantity;

// approach 4
var el = document.getElementById("cost");
el.textContent = "$" + total;