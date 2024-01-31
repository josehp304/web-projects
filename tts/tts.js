const text = document.querySelector(".text");
const speed = document.querySelector("#speed");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
play.addEventListener("click", () => {
  playtext();
});
function playtext() {
  const tts = new SpeechSynthesisUtterance(text.value);
  tts.rate = speed.value || 1;
  speechSynthesis.speak(tts);
}
