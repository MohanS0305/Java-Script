let celsius = document.getElementById("cButton");
let fahrenheit = document.getElementById("fButton");
const submitBtn = document.getElementById("submitBtn");
const display = document.getElementById("display");

submitBtn.onclick = function () {
  const temp = document.getElementById("temp").value;
  const clearInput = (document.getElementById("temp").value = "");

  if (celsius.checked) {
    celsius = (temp - 32) * (5 / 9);
    celsius = celsius.toFixed(1) + " °C";
    display.textContent = "Celsius = " + celsius;
  } else if (fahrenheit.checked) {
    fahrenheit = (temp * 9) / 5 + 32;
    fahrenheit = fahrenheit.toFixed(1) + " °F";
    display.textContent = "Fahrenheit = " + fahrenheit;
  } else {
    display.innerHTML = "Pls select the celsius or fahrenheit";
  }

  clearInput;
};
