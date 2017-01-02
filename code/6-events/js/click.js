// create the HTML for the message
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');           // create a new element
elNote.setAttribute('id', 'note');                    // add an id of note
elNote.innerHTML = msg;                               // add the message
document.body.appendChild(elNote);                    // add it to the page

function dismissNote() {                              // declare function
  document.body.removeChild(elNote);                  // remove the note
}

var elClose = document.getElementById('close');       // get the close button
elClose.addEventListener('click', dismissNote, false); // click close-clear note