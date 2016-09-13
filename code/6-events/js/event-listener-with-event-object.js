function checkLengh(e, minLength) {             // declare function
  var el, elMsg;                                // declare variables
  if (!e) {                                     // if event object doesn't exist
    e = window.event;
  }
  el = e.target || e.srcElement;                // get target of event
  elMsg = el.nextSibling;                       // get its next sibling
  
  if (el.value.length < minLength) {            // if length is too short set msg
    elMsg.innerHTML = 'Username must be ' + minLength + ' characters or more';
  } else {                                      // otherwise
    elMsg.innerHTML = '';                       // clear message
  }
}

