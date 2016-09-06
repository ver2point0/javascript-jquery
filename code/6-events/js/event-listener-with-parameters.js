var elUsername = document.getElementById('username');   // username input
var elMsg      = document.getElementById('feedback');   // error msg element

function checkUsername(minLength) {                     // declare function
  if (elUsername.value.length < minLength) {            // if username is too short
    // set error message
    elMsg.innerHTML = "Username must be " + minLength + " characters or more";
  } else {                                              // otherwise
    elMsg.innerHTML = "";                               // clear msg
  }
}

elUsername.addEventListener(
  'blur',                                               // when it loses focus
  function() { 
    checkUsername(5);                                   // pass argument here
  }, 
  false
);