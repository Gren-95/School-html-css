let arv1 = prompt("Sisesta arv 1");
let arv2 = prompt("Sisesta arv 2");
arv1 = parseInt(arv1);
arv2 = parseInt(arv2);

if (arv1 >= 100) {
    document.write("arv 1 on suurem kui 100");
} else {
    document.write("arv 1 on väiksem kui 100");
}

document.write("<br>");

if (arv2 >= 100) {
    document.write("arv 2 on suurem kui 100");
} else {
    document.write("arv 2 on väiksem kui 100");
}
document.write("<br>");

if (arv1 % 2 == 0) {
    document.write("arv 1 on paarisarv");
} else {
    document.write("arv 1 on paaritu arv");
}
document.write("<br>");

if (arv2 % 2 == 0) {
    document.write("arv 2 on paarisarv");
} else {
    document.write("arv 2 on paaritu arv");
}