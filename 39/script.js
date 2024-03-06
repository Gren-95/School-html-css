function nameee() {
    alert("Data saved!")
    let enimi = document.getElementById("enimi").value;
    let pnimi = document.getElementById("pnimi").value;
    document.getElementById("tulemused").innerHTML = "Sinu eesnimi on " + enimi + " ja perekonnanimi on " + pnimi + ".";

}