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