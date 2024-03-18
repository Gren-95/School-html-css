let d = new Date();
document.write(d)

let kuunr = d.getMonth();
document.write("<br>" + kuunr)

let paevnr = d.getDay();
document.write("<br>" + paevnr + "<br>")

let nadalapaev
switch (paevnr) {
    case 0:
        nadalapaev = "Pühapäev"; break;
    case 1:
        nadalapaev = "Esmaspäev"; break;
    case 2:
        nadalapaev = "Teisipäev"; break;
    case 3:
        nadalapaev = "Kolmapäev"; break;
    case 4:
        nadalapaev = "Neljapäev"; break;
    case 5:
        nadalapaev = "Reede"; break;
    default:
        nadalapaev = "Laupäev";

}document.write("Täna on " + nadalapaev + ".<br>")


// Ül 1
let arv1 = parseInt(prompt("Sisesta arv 1-5"));
if (arv1 >= 1 && arv1 <= 5) {
    let language = prompt("Palun vali keel");
    switch (language) {
        case "eesti":
            switch (arv1) {
                case 1:
                    document.write("Üks");
                    break;
                case 2:
                    document.write("Kaks");
                    break;
                case 3:
                    document.write("Kolm");
                    break;
                case 4:
                    document.write("Neli");
                    break;
                default:
                    document.write("Viis");
                    break;
            }
            break;
        default:
            switch (arv1) {
                case 1:
                    document.write("One");
                    break;
                case 2:
                    document.write("Two");
                    break;
                case 3:
                    document.write("Three");
                    break;
                case 4:
                    document.write("Four");
                    break;
                default:
                    document.write("Five");
                    break;
            }
    }
}

document.write("<br>")
// Ül 2

let arv2 = parseInt(prompt("Sisesta arv 1-7"));
if (arv1 >= 1 && arv1 <= 7) {

    switch (arv2) {
        case 1:
            document.write("Nädala algus");
            break;
        case 2:
            document.write("Nädala algus");
            break;
        case 3:
            document.write("Kesknädal");
            break;
        case 4:
            document.write("Kesknädal");
            break;
        case 5:
            document.write("Nädala Lõpp");
            break;
        case 6:
            document.write("Nädalavahetus");
            break;
        default:
            document.write("Nädalavahetus");
            break;
    }
}

let operand = prompt("Sisesta tehte märk (+;-;*;/)");
let arv3 = parseInt(prompt("Sisesta arv 1"));
let arv4 = parseInt(prompt("Sisesta arv 2"));

let result;

switch (operand) {
    case '+':
        result = arv3 + arv4;
        break;
    case '-':
        result = arv3 - arv4;
        break;
    case '*':
        result = arv3 * arv4;
        break;
    case '/':
        if (arv4 !== 0) {
            result = arv3 / arv4;
        } else {
            alert("Division by zero is not allowed.");
            return;
        }
        break;
    default:
        alert("Invalid operator.");
        return;
}