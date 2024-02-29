// console.log(checkArrayElement(["hello", "world", "search", "good"]));

// console.log(checkArrayElement(["hello", "world", "search", "good", "search"]));
/*
function checkArrayElement(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "search") {
      return i;
    }
  }
  return -1;
}

const array = ["hello", "world", "search", "good", "search"];

for (i = 0; i < array.length; i++) {
  if (array[i] === "search") {
    console.log(i);
    break;
  }
}

console.log(findIndex(["green", "red", "blue", "red"], "red"));
function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }
  return -1;
}

*/

/*
const foods = ["egg", "apple", "egg", "ham"];
let result = [];

removeEgg(foods);

function removeEgg(foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    } else {
      result.push(foods[i]);
    }
  }
  console.log(result);
}
*/

/*
const foods = ["egg", "apple", "egg", "egg", "ham"];
let withoutEgg = [];

removeEgg(foods);

function removeEgg(foods) {
  let eggCount = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && eggCount < 2) {
      eggCount++;
    } else {
      withoutEgg.push(foods[i]);
    }
  }
  console.log(withoutEgg);
}
*/
/*
const foods = ["egg", "apple", "egg", "egg", "ham"];
let reverseFoods = foods.slice();
reverseFoods = reverseFoods.reverse();
let withoutEgg = [];

removeEgg(reverseFoods);

function removeEgg(foods) {
  let eggCount = 0;
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "egg" && eggCount < 2) {
      eggCount++;
    } else {
      withoutEgg.push(foods[i]);
    }
  }
  console.log(withoutEgg.reverse());
}

console.log(foods);
*/

// divisible by 3 is Fizz , divisible by 5 Buzz divisible by both 3 and 5 FizzBuzz

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  }
}

// const originalArray = ["green", "red", "blue", "red"];
// const uniqueArray1 = [];

// uniqueArray(originalArray);

// function uniqueArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (uniqueArray1.indexOf(array[i] === -1)) {
//       uniqueArray1.push(array[i]);
//     }
//   }
//   console.log(uniqueArray1);
// }
