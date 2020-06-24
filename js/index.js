// Assigning Dom Elements ("The Clock Elements") to variables
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let tod = document.getElementById("tod");

// Just a function to padd a single number with zero
function zeroPad(time) {
  if (time < 10) {
    time = "0" + time;
  }

  return time;
}
function amPm(time) {
  if (time > 12) {
    time = time - 12;
  }
  return time;
}

// The clock function to assign the DOM elements with time
function clock() {
  let date = new Date();

  //The "getHours()"" function by default returns 24hr format. This line strikes it down to 12
  hour.textContent = zeroPad(amPm(date.getHours()));
  min.textContent = zeroPad(date.getMinutes());
  sec.textContent = zeroPad(date.getSeconds());

  if (date.getHours() > 12) {
    tod.textContent = "PM";
  } else {
    tod.textContent = "AM";
  }
}

// Executes the clock function every 1second
setInterval(clock, 1000);
