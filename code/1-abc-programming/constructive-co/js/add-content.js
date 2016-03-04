var today = new Date();
var hourNow = today.getHours;
var greeting;

// indicates an appropriate greeting based on time of day
if (hourNow > 18) {
  greeting = "Good evening!";
} else if (hourNow > 12) {
  greeting = "Good morning!";
} else {
  greeting = "Welcome!";
}

document.write("<h3>" + greeting + "</h3>");