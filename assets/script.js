function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimer() {
  const timerElement = document.getElementById('countdown');
  const audioControl = document.getElementById('audio-control');
  let timeInSeconds = 600;

  const backgroundMusic = document.getElementById('background-music');

  backgroundMusic.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

  audioControl.addEventListener('click', function() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      audioControl.textContent = '⏸️';
    } else {
      backgroundMusic.pause();
      audioControl.textContent = '▶️';
    }
  });

  const timerInterval = setInterval(() => {
    timerElement.textContent = formatTime(timeInSeconds);

    if (timeInSeconds === 0) {
      clearInterval(timerInterval);
      alert('Tempo esgotado!');
      backgroundMusic.pause();
    } else {
      timeInSeconds--;
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
  const olhoEsquerdo = document.querySelector(".olhos");

  function piscarOlho() {
    setInterval(() => {
      olhoEsquerdo.textContent = " -- ";

      setTimeout(() => {
        olhoEsquerdo.textContent = "oo";
      }, 1000);
    }, 7000);
  }

  piscarOlho();
});

window.onload = updateTimer;