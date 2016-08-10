// get the first list item
var firstItem = document.getElementById('one');

// if it has class attribute 
if (firstItem.hasAttribute('class')) {
  var attr = firstItem.getAttribute('class'); // get the attribute

  // add value of attribute after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '<p>';
}