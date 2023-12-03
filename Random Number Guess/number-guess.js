const answer = Math.floor(Math.random() * 10) + 1;
const result = document.getElementById("myPara");

let guess = 0;

const btn = (document.getElementById("submitBtn").onclick = function () {
  const userGuess = document.getElementById("txtBox").value;

  guess += 1;
  if (isNaN(userGuess)) {
    result.innerHTML = "Pls Enter a number";
  }else if (userGuess == answer) {
    console.log(userGuess);
    result.innerHTML = `Your guess is ${userGuess} and computer guess is ${answer} you find in ${guess} guesses`;
  } else if (userGuess < answer) {
    console.log(userGuess);
    result.innerHTML = "It's too small!!!";
  } else if (userGuess > answer) {
    result.innerHTML = "It's too large!!!";
  }

  document.getElementById("txtBox").value = "";
});
