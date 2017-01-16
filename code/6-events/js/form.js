// declare variables
var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

// store elements
elForm          = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

// declare function
function packageHint() {
  // get selected option
  var pack = this.options[this.selectedIndex].value;
  // if monthly package
  if (pack === 'monthly') {
    // show this message
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
    // otherwise
  } else {
    // show this message
    elPackageHint.innerHTML = 'Wise choice!';
  }
}

// declare function
function checkTerms(event) {
  // if checkbox ticked
  if (!elTerms.checked) {
    // show message
    elTermsHint.innerHTML = 'You must agree to the terms.';
    // don't submit form
    event.preventDefault();
  }
}

// create event listeners: submit calls checkTerms(), change calls packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);




