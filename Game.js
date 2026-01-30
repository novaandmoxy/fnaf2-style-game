let time = 12;
let animatronicHere = false;

const timeText = document.getElementById("time");
const camStatus = document.getElementById("camStatus");
const cameras = document.getElementById("cameras");
const mask = document.getElementById("mask");
const jumpscare = document.getElementById("jumpscare");

document.getElementById("camBtn").onclick = () => {
  cameras.classList.remove("hidden");
};

document.getElementById("closeCam").onclick = () => {
  cameras.classList.add("hidden");
};

document.getElementById("maskBtn").onclick = () => {
  mask.classList.toggle("hidden");
};

// Time progression
setInterval(() => {
  time++;
  if (time > 6) time = 6;
  timeText.textContent
