function checkUsername() {                              // declare function
    var username = el.value;                            // store usernanme in variable
    if (username.length < 5) {                          // if username < 5 characters
        elMsg.className = 'warning';                    // change class on message
        elMsg.textContent = 'Not long enough, yet...';  // update message
    } else {                                            // otherwise
        elMsg.textContent = '';                         // clear the message
    }
}

