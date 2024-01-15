const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const tryy = document.querySelector(".try");
const bodyBg = window.getComputedStyle(document.body);
tryy.style.display = "none";
// stop.disabled = true;
stop.style.display = "none";
let colorIntervel = 0;
function randomcolor() {
  const hex = "0123456789";
  let color = "#";
  for (i = 0; i < 9; i++) {
    color += Math.round(Math.random() * 16);
  }
  document.body.style.backgroundColor =;                                                 
  document.body.style.backgroundColor.opacity = "1";
}

function changeColor() {
  colorIntervel = setInterval(randomcolor, 20);
  stop.style.display = "";
  start.style.display = "none";
  stop.disabled = false;
  start.disabled = true;
  tryy.style.display = "none";
}
function stopcolor() {
  clearInterval(colorIntervel);
  stop.style.display = "none";
  start.style.display = "";
  start.disabled = false;
  stop.disabled = true;
  tryy.style.display = "";
  isBlue();

  //   colorIntervel = null;
}
start.addEventListener("click", changeColor);
stop.addEventListener("click", stopcolor);

// function hexToRgb(color) {
//   const colorArray = color.split("");
//   const colorArray1 = colorArray.splice(1);
//   const r = parseInt(colorArray1.splice(0, 2).join(""), 16);
//   const g = parseInt(colorArray1.splice(0, 2).join(""), 16);
//   const b = parseInt(colorArray1.splice(0, 2).join(""), 16);
//   return [r, g, b];
// }
function isBlue() {
  const rgba_raw = bodyBg.backgroundColor;

  let pattern = /^(rgb)a?\((\d+), (\d+), (\d+)(, ([0|1]\.\d+))\)/;
  let rgb = rgba_raw.match(pattern);
  console.log(rgba_raw);
  if (rgb[2] < rgb[4] && rgb[4] > rgb[3]) {
    console.log("won");
  } else {
    console.log("Lost, try again");
  }
}
