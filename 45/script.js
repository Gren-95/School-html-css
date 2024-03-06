function ifaxample() {
    const b = document.getElementById("ifinput").value; // Fixed comparison


    if (b == 2) { // Fixed comparison and type
        document.getElementById("output").textContent = b;
    } else {
        document.getElementById("output").textContent = "Neither condition met";
    }
}

for (let i = 0; i <= 10; i++) {
    document.write(i)
}

let c = 1;
while (c <= 10) {
    document.write(c) + "<br>";
    c++;
}