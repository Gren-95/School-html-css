
function disel_generator(minnum, maxnum) {
  let answer1 = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
  return answer1;
}

// generates number between 0 and 1
let random1;
random1 = Math.random();
document.write("Generated number " + random1 + "<br>");

// Generated number between 2 and 5
let num = disel_generator(2, 5);
document.write("Today your grade is " + num + ".<br>");

// roll dice
let num2 = disel_generator(1, 6);
document.write("You rolled " + num2 + "<br>");

// Lucky number:
let num3 = disel_generator(1, 64);
document.write("Generated number is " + num3 + "<br>");

// Check if answer is not 13 and is divisible by 7
if (num3 !== 13 && num3 % 7 === 0) {
  document.write("Your lucky number is " + num3 + "<br>");
} else {
  document.write("Try again for a lucky number!<br>");
}

// roll dice 10 time
document.write("Writing a loop" + "<br>");
for (let i = 1; i <= 10; i++) {
  let num4;
  num4 = disel_generator(1, 20);
  document.write(i + ". number that has been generated " + num4 + "<br>");
}