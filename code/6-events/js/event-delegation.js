function getTarget(e) {                 // declare function
  if (!e) {                             // if there is no event object
    e = window.event                    // use old IE event object
  }
  return e.target || e.srcElement       // get the target of event
}

function itemDone(e) {                  // declare function
  // remove item from the list
  var target, elParent, elGrandparent;  // declare variables
  target = getTarget(e);                // get the item clicked link
  
  
  /*
  The book used the following code - but it had two shortcomings
  - Clicking between list items would remove the whole list
  - Clicking on italic text would remove the link - not the list item
  
  elParent = target.parentNode;
  elGrandparent = target.parentNode.parentNode;
  elGrandparent.removeChild(elParent);
  
  The next 10 lines improve that example
  */
  
  
}