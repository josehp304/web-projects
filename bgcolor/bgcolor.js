const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const tryy = document.querySelector(".try");
const bodyBg = window.getComputedStyle(document.body);
tryy.style.display = "none";
// stop.disabled = true;
stop.style.display = "none";
let colorIntervel = 0;
function randomcolor() {
  let num = "";
  for (i = 0; i < 3; i++) {
    num += Math.round(Math.random() * 256);
  }
  let r = num.slice(6, 9);
  let g = num.slice(3, 6);
  let b = num.slice(0, 3);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
  start.textContent = "try again";
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

  let pattern = /^(rgb)a?\((\d+), (\d+), (\d+)(, ([0|1]\.\d+))?\)/;
  let rgb = rgba_raw.match(pattern);
  console.log(rgba_raw);

  let rr = parseInt(rgb[2]);
  let gg = parseInt(rgb[3] - 30);
  let bb = parseInt(rgb[4]);

  if (rr < bb && gg < bb) {
    // check it this if statement if right and try nested if next
    console.log("won");
    tryy.innerHTML = "<h1>WON!🎉</h1>";
  } else {
    console.log("Lost, try again");
    tryy.innerHTML = "<h2>Lost😭😭, try again.</h2>";
  }
}
