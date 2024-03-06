let ins_num = prompt("Palun sisesta kahekohaline number");

let kumneline = parseInt(ins_num.charAt(0));
let uheline = parseInt(ins_num.charAt(1));
let num2 = fun(kumneline, uheline);

function fun(a, b) {
  if (ins_num > 9 && ins_num < 100) {
    let c = a + b;
    document.write("Ristsumma on " + c);
    document.write("<br>");
    let c2 = a * b;
    document.write("Ristkorrutis on " + c2);
  } else {
    document.write("ERROR");
  }
}