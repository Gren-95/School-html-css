let numb1;
let numb2;
numb1 = prompt(numb1);
numb2 = prompt(numb2);
numb1 = parseInt(numb1);
numb2 = parseInt(numb2);
if (numb1 > numb2) {
  document.write("number 1 on suurem");
  document.body.style.backgroundColor = "yellow";
  document.body.style.color="black"
} else {
  document.write("number 2 on suurem");
  document.body.style.backgroundColor = "green";
  document.body.style.color="white"

}