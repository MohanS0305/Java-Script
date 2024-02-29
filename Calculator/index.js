const buttons = document.querySelectorAll(".cal_btn");
const display = document.querySelector(".screen");

let string = "";
let arr = Array.from(buttons);

// iterate through all the buttons display the button value in screen
arr.forEach(button => {
  button.addEventListener("click",(e) => {
    if (e.target.innerHTML === "=") {
      string = eval(string);
      display.value = string;
    } else if (e.target.innerHTML === "c") {
      string = "";
      display.value = 0;
    } else if (e.target.innerHTML === "DEL") {
      if (string.length > 0) {
        string = string.substring(0, string.length - 1);
        display.value = string;
      }
    } else {
      string += e.target.innerHTML;
      display.value = string;
    }
  });
});
