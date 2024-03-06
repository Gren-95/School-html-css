function arvuta() {
    let arv1 = document.getElementById("num1").value;
    let arv2 = document.getElementById("num2").value;
    arv1 = parseInt(arv1);
    arv2 = parseInt(arv2);
    let summa = arv1 + arv2;
    document.getElementById("tulem").innerHTML = summa;

    if (summa === 12) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "red";
    }
}