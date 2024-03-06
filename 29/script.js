let numb1 = prompt("sisesta number 1");
let numb2 = prompt("sisesta number 2");
let numb3 = prompt("sisesta number 3");
numb1 = parseInt(numb1);
numb2 = parseInt(numb2);
numb3 = parseInt(numb3);
if (numb1 >= numb2 && numb1 >= numb3) {
    document.write("numb 1 on surim");
} else if (numb2 >= numb1 && numb2 >= numb3) {
    document.write("numb 2 on surim");
} else if (numb3 >= numb1 && numb3 >= numb2) {
    document.write("numb 3 on surim");
} else {
    document.write("idk");
}