
//let height = prompt("Insert your height");
//let height_unit = prompt("Insert your height unit");
//let mass = prompt("Insert your weight");
//let mass_unit = prompt("Insert your weight unit");
let height = 170;
let mass = 130;
let mass_unit = "nael";
let height_unit = "cm";
let mass_result;
let height_result;

if (mass_unit === "nael") {
    mass_result = mass *= 0.45;
    mass_unit = "kg";
} else {
    mass_result = mass;
}

if (height_unit === "cm") {
    height_result = height / 100; // Corrected this line
    height_unit = "m";
} else {
    height_result = height;
}

document.write(height_result);
document.write(" " + height_unit);
document.write("<br>");
document.write(mass_result);
document.write(" " + mass_unit);

let bmi = mass_result / height_result ** 2;

document.write("<br>BMI: " + bmi.toFixed(2)); // Added line to display BMI
document.write("<br>");

if (bmi < 19) {
    document.write("SÖÖ ROHKEM!!!");
} else if (bmi <= 25) {
    document.write("OLED NORMAALNE!!!");
} else {
    document.write("SÖÖ VÄHEM PAKSUKE!!!");
}

let normaalkaal = 25 * height ** 2;
normaalkaal.toFixed;
let maha = Math.round(mass - normaalkaal);