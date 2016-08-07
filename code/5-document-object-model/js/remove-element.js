// store the element to be removed in a variable
var removeEl = document.getElementsByTagName('li')[3];

// find the element which contains the element to be removed
var containerEl = removeEl.parentNode;

// remove the element
containerEl.removeChild(removeEl);