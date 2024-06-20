// buttons
let hoursBtn = document.querySelector(".count-hours");
let minutesBtn = document.querySelector(".count-minutes");
let secondsBtn = document.querySelector(".count-seconds");

function timeNow() {
  let tempTime = new Date();
  let hours = tempTime.getHours();
  let minutes = tempTime.getMinutes();
  let seconds = tempTime.getSeconds();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  hoursBtn.innerHTML = hours;
  minutesBtn.innerHTML = minutes;
  secondsBtn.innerHTML = seconds;
}
document.addEventListener("DOMContentLoaded", timeNow);
window.setInterval(timeNow, 1000);
