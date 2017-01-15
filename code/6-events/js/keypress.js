var el; // declare variables

function charCount(e) { // declare function
  var textEntered, charDisplay, counter, lastKey; // declare variables
  textEntered = document.getElementById('message').value; // user's text
  charDisplay = document.getElementById('charactersLeft'); // counter element
  counter = (180 - (textEntered.length)); // num of chars left
  charDisplay.textContent = counter; // show chars left
  lastKey = document.getElementById('lastKey'); // get last key elem
  lastKey.textContent = 'Last key in ASCII code: ' + e.keyCode; // create msg
}

el = document.getElementById('message'); // get msg element
el.addEventListener('keyup', charCount, false); // keyup - call charCount()