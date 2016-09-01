function checkUsername() {                  // declare function
  var elMsg = document.getElementById('feedback');  // get feedback element
  if (this.value.length < 5) {                      // if username is too short
    elMsg.textContent = 'Username must be 5 characters or more'; // set msg
  } else {                                                       // otherwise
    elMsg.textContent = '';                                      // clear msg
  }
}

var elUsername = document.getElementById('username');           // get username input
// when it loses focus call checkUsername()
elUsername.addEventListener('blur', checkUsername, false);