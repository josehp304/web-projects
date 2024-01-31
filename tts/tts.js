const text = document.querySelector(".text");
const speed = document.querySelector("#speed");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const resume = document.querySelector(".resume");
resume.style.display = "none";
pause.style.display = "none";

play.addEventListener("click", () => {
  playtts();
});
stop.addEventListener("click", () => {
  stoptts();
});
pause.addEventListener("click", () => {
  pausetts();
});
resume.addEventListener("click", () => {
  resumetts();
});
function playtts() {
  const tts = new SpeechSynthesisUtterance(text.value);
  tts.rate = speed.value || 1;
  text.disabled = true;
  speechSynthesis.speak(tts);
  play.style.display = "none";
  pause.style.display = "";
  tts.addEventListener("end", () => {
    text.disabled = false;
    play.style.display = "";
    pause.style.display = "none";
  });
}
function stoptts() {
  text.disabled = false;
  play.style.display = "";
  pause.style.display = "none";
  resume.style.display = "none";
  speechSynthesis.cancel();
}

function pausetts() {
  speechSynthesis.pause();
  pause.style.display = "none";
  resume.style.display = "";
}

function resumetts() {
  pause.style.display = "";
  resume.style.display = "none";
  speechSynthesis.resume();
}
