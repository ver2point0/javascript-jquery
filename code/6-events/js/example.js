var noteInput, noteName, textEntered, target;   // declare variables

noteName = document.getElementById('noteName'); // element that holds note
noteInput = document.getElementById('noteInput'); // input for writing the note

function writeLabel(e) {          // declare function
  if (!e) {                       // if event object not present
    e = window.event;             // use IE5-8 fallback
  }
  target = e.target || e.srcElement;    // get target of event
  textEntered = target.value;           // value of that element
  noteName.textContent = textEntered;   // update note text  
}

function recorderControls(e) {      // declare recorderControls()
  if (!e) {                         // if event object not present
    e = window.event                // use IE5-8 fallback
  }
  target = e.target || e.srcElement; // get the target element
  if (e.preventDefault) {             // if preventDefault() supported
    e.preventDefault();              // stop default action
  } else {                          // otherwise
    e.returnValue = false;          // IE fallback: stop default action
  }
  
  switch(target.getAttribute('data-state')) { // get the data-state attribute
    case 'record':                            // if value is record
      record(target);                         // call record() function
      break;                                  // exit function to where called
    case 'stop':                              // if its value is stop
      stop(target);                           // call stop() function
      break;                                  // exit function to where called
  }
}

function record(target) {                     // declare function
  target.setAttribute('data-state', 'stop');  // set data-state attr to stop
  target.textContent = 'stop';                // set text to 'stop'
}

function stop(target) {
  target.setAttribute('data-state', 'record'); // set data-state attr to record
  target.textContent = 'record';               // set text to 'record'
}

if (document.addEventListener) {              // if event listener supported
  document.addEventListener('click', function(e) { // for any click document
    recorderControls(e);                            // call recorderControls()
  }, false);                                        // capture during bubble phase
  // if input event fires on noteInput input call writeLabel()
  noteInput.addEventListener('input', writeLabel, false);
} else { // otherwise
  document.attachEvent('onclick', function(e) { // IE fallback: any click
    recorderControls(e);                        // calls recorderControls()
  });
  // if keyup event fires on noteInput call writeLabel()
  noteInput.attachEvent('onkeyup', writeLabel);
}

















