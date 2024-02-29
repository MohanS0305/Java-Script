const inputElement = document.querySelector(".js-display-time");
const startBtn = document.querySelector(".js-srt-btn");
const stopBtn = document.querySelector(".js-stp-btn");
const resetBtn = document.querySelector(".js-reset-btn");

let Timer = JSON.parse(localStorage.getItem("Timer")) || {
  sec: 0,
  min: 0,
  hrs: 0,
};

inputElement.value = `${Timer.hrs}   :    ${Timer.min}   :    ${Timer.sec}`;

// start btn logic
let timeInterval;
startBtn.addEventListener("click", () => {
  timeInterval = setInterval(() => {
    if (Timer.sec < 60) {
      Timer.sec += 1;
      if (Timer.sec === 60) {
        Timer.sec = 0;
        if (Timer.min < 60) {
          Timer.min += 1;
        } else if (Timer.min === 60) {
          Timer.min = 0;
          if (Timer.hrs < 12) {
            Timer.hrs += 1;
          } else {
            Timer.hrs = 1;
          }
        }
      }
      localStorage.setItem("Timer", JSON.stringify(Timer));

      inputElement.value = `${Timer.hrs}   :    ${Timer.min}   :    ${Timer.sec}`;
    }
  }, 1000);
});

//stop btn logic
stopBtn.addEventListener("click", () => {
  clearInterval(timeInterval);
});

// reset btn logic
resetBtn.addEventListener("click", () => {
  Timer.sec = 0;
  Timer.min = 0;
  Timer.hrs = 0;
  localStorage.removeItem("Timer");
  inputElement.value = `${Timer.hrs}   :    ${Timer.min}   :    ${Timer.sec}`;
});
