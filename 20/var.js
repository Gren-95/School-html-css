let num = 2;
let text = "testing";
let bool = true;

document.write("Var type is: " + typeof num + ".<br>");
document.write("Var value: " + num + ".<br>");
document.write("<br>");
document.write("Var type is: " + typeof text + ".<br>");
document.write("Var value: " + text + ".<br>");
document.write("<br>");
document.write("Var type is: " + typeof bool + ".<br>");
document.write("Var value: " + bool + ".<br>");
document.write("<hr>");

let a = 10;
let b = 200;

document.write("a=" + a + " ja b= " + b + ".<br>");
document.write("<br>");

let temp = a;
a = b;
b = temp;

document.write("a=" + a + " ja b= " + b + ".<br>");
document.write("<hr>");

let variable;

document.write(typeof variable + " väärtus on " + variable + "<br>");
variable = 300;
document.write(typeof variable + " väärtus on " + variable + "<br>");

variable = "Efe";
document.write(typeof variable + " väärtus on " + variable + "<br>");

variable = true;
document.write(typeof variable + " väärtus on " + variable + "<br>");
document.write("<br>");
document.write("<hr>");

let c = prompt("insert data")
document.write("datatype of c is: " + typeof (c) + "  value is: " + c);