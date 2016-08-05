// create a new element and store it in a variable
var newEl = document.createElement('li');

// create a text node and store it in a variable
var newText = document.createTextNode('quinoa');

// attach the new text node to the new element
newEl.appendChild(newText);

// find the position where the new element should be added
var position = document.getElementsByTagName('ul')[0];

position.appendChild(newEl);