const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

function onStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;

  timerId = setInterval(() => {
    let color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
}

function onStop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
