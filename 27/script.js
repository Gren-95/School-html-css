let bool1 = true;
let bool2 = false;
// Loogiline korrutamine
document.write("Esimese muutuja väärtus on " + bool1 + "<br>");
document.write("Teise muutuja väärtus on " + bool2 + "<br>");
document.write(
  "Loogilise korrutaminse tulemus on " + bool1 && bool2 + "<br>"
);
document.write("Loogilise liitmise tulemus on " + bool1 || bool2 + "<br>");

function implication(a, b) {
  let tulem = true;
  if (a === true && b === false) {
    tulem = false;
  }
  return tulem;
}
document.write("<br>");
document.write("1. implikatsioon on " + implication(bool1, bool2) + "<br>");
document.write("1. implikatsioon on " + implication(bool2, bool1) + "<br>");
document.write(bool1 === bool2);