let arv1 = prompt("Sisesta siia arv");
if (arv1 >= 1 && arv1 <= 100 && arv1 % 7 === 0) {
    document.write("vahemikus 1 - 100 ja jagub 7-ga");
} else if ((arv1 >= 1 && arv1 <= 100) || arv1 >= 200) {
    document.write("vahemikus 1 - 100 või 200+");
} else {
    document.write("ei tea");
}