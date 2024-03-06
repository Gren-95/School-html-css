let n = 50;
let sum = 0;
let f1 = 1;
let f2 = 1;

for (let i = 0; i < n; i++) {
    document.write((sum = f1 + f2) + "<br>");
    document.write(f2 = f1) + "<br>";
    document.write(f1 = sum) + "<br>";
    document.write(sum) + "<br>";
    document.write("<br>")
}