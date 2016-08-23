function checkUsername() {                            // declare function
  var elMsg = document.getElementById('feedback');    // get feedback element
  var elUserName = document.getElementById('username'); // get username input
  if (elUserName.value.length < 5) {                    // if username is too short
    elMsg.textContent = 'Username must be 5 characters or more'; // set msg
  } else {                                                       // otherwise
    elMsg.textContent = '';                                      // clear message
  }
}