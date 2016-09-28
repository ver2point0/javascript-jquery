function setup() {                  // declare function
  var textInput;                    // create variable
  textInput = document.getElementById('username');  // get username input
  textInput.focus();                // give username focus
}

window.addEventListener('load', setup, false); // when page loads, call setup()

/* LONGER version with IE8 (and lower) compatibility

if (el.addEventListener) {
  el.addEventListener('click', function(e) {
    itemDone(e);}, false);
} else {
  el.attachEvent('onload', function(e) {
    itemDone(e);
  };
}

*/ 

