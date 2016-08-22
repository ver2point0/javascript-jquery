// adding items to start and end of list

var list = document.getElementsByTagName('ul')[0];    // get <ul> element

// add new item to the end of the list
var newItemLast = document.createElement('li');       // create a new element
var newTextLast = document.createTextNode('cream');   // create text node
newItemLast.appendChild(newTextLast);                 // add text node to element
list.appendChild(newItemLast);                        // add element to end of the list

// add new item to the start of the list              
var newItemFirst = document.createElement('li');      // create a new element
var newTextFirst = document.createTextNode('kale');   // create text node
newItemFirst.appendChild(newTextFirst);               // add text to element
list.insertBefore(newItemFirst, list.firstChild);     // add element to the start of the list

var listItems = document.querySelectorAll('li');      // select all <li> elements

// add a class of cool to all list items
var i;                                                // counter variable
for (i = 0; i < listItems.length; i++) {              // loop through all <li> elements
  listItems[i].className = 'cool';                    // change <li> elements classes to cool
}

// add number of items in the list to the heading
var heading = document.querySelector('h2');           // select <h2> element
var headingText = heading.firstChild.nodeValue;       // h2 text
var totalItems = listItems.length;                    // No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // content
heading.innerHTML = newHeading;                                   // Update h2 using innerHTML (not textContent) because it contains markup