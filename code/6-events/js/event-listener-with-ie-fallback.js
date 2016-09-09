var elUsername = document.getElementById('username');   // get username input
var elMsg = document.getElementById('feedback');        // get feedback element

function checkUsername(minLength) {                     // declare function
  if (elUsername.value.lenth < minLength) {           // if username is too short
  // set message
  elMsg.innerHTML = "Username must be " + minLength + " characters or more";
  } else {                                            // otherwise
    elMsg.innerHTML = "";                           // clear message
  }
}

if (elUsername.addEventListner) {                 // if event listener is supported
  elUsername.addEventListenter(                   // when username loses focus
    'blur', 
    function() {
    checkUsername(5);                             // call checkusername()
    },
    false);                                       // capture during bubble phase
} else {                                          // otherwise
  elUsername.attachEvent(       
    'onblur',                                     // IE fallback: on blur
    function() {
      checkUsername(5);                           // call checkUsername()
    });
}