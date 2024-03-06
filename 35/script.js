let neg_or_pos1 = check_number(prompt("Palun sisesta täisarv"));
let neg_or_pos2 = check_number(prompt("Palun sisesta täisarv"));
let neg_or_pos3 = check_number(prompt("Palun sisesta täisarv"));

function check_number(input) {
  input = parseInt(input);
  if (input > 0 && input % 2 === 0) {
    document.write("arv on positiivne ja on võrdne kahega " + input + "<br>");
  } else if (input <= -1) {
    document.write("arv on negatiivne " + input + "<br>");
  } else if (input >= 1) {
    document.write("arv on positiivne " + input + "<br>");
  } else if ((input = 0)) {
    document.write("arv on 0 " + input);
  } else {
    document.write("pole arv " + input);
  }
}