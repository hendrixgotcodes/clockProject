function hendrix(String) {
  let count = 0;
  for (let i = 0; i < String.length(); i++) {
    if (String[i] === "b") {
      count++;
    }
  }
  return count;
}

let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let tod = document.getElementById("tod");

function zeroPad(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

function clock() {
  let date = new Date();

  hour.textContent = zeroPad(date.getHours() - 12);
  min.textContent = zeroPad(date.getMinutes());
  sec.textContent = zeroPad(date.getSeconds());

  if (date.getHours() > 12) {
    tod.textContent = "PM";
  } else {
    tod.textContent = "AM";
  }
}

console.log(setInterval(clock, 1000));
