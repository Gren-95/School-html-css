let temp2;
temp2 = prompt("Enter a temperature:");
temp2 = parseInt(temp2);
if (temp2 <= 18) {
    document.write(
        "cold temp" + "<style>body {background-color: blue;}</style>"
    );
} else if (temp2 <= 23) {
    document.write(
        "normal temp" + "<style>body {background-color: green;}</style>"
    );
} else {
    document.write(
        "hot temp" + "<style>body {background-color: red;}</style>"
    );
}