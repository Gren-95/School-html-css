
let random1;
random1 = Math.random();
// generates number between 0 and 1
document.write("Generated number " + random1 + "<br>");

// Generated number between 2 and 5
let min = 2;
let max = 5;
let number1 = Math.floor(random1 * (max - min + 1)) + min;
document.write("Today your grade is " + number1 + ".<br>");

// roll dice
min = 1;
max = 6;
let answer = Math.floor(random1 * (max - min + 1)) + min;
document.write("You rolled " + answer + "<br>");

// Lucky number:
// 1. between 1 and 64
// 2. cant be 13
// 3. divisible by 7
min = 1;
max = 64;
answer = Math.floor(random1 * (max - min + 1) + min);
document.write("Generated number is " + answer + "<br>");

// Check if answer is not 13 and is divisible by 7
if (answer !== 13 && answer % 7 === 0) {
  document.write("Your lucky number is " + answer + "<br>");
} else {
  document.write("Try again for a lucky number!<br>");
}