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