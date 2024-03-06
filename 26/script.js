/*
function daysInYear(year) {
    return ((year % 4 === 0 && year % 100 > 0) || year %400 == 0) ? 366 : 365;
}
let year1
year1= prompt(year1)
year1=parseInt(year1)
document.write(daysInYear(year1));
*/


let aasta=parseInt(prompt("Sisesta aasta"))
let paeviaastas=(aasta%4==0)?366:365;
document.write("Aastas " + aasta + " on " + paeviaastas + " päeva.<br>")