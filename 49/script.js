function tegutse(form) {
    let txt = form._tekst.value;
    let first_Five = txt.slice(0, 5); //sõna algusest viis esimest märki
    let last_Five = txt.slice(-5);   // sõna lõpust viis viimast märki
    let middle_Five_Length = txt.length;
    let middle_Five_Middle_Pos = Math.floor(middle_Five_Length / 2);
    let middle_Five = txt.substr(middle_Five_Middle_Pos - 2, 5);
    let first_Space = txt.indexOf(" ");
    let last_Space = txt.lastindexOf(" ");
    let first_Word = txt.slice(0, first_Space);
    let last_Word = txt.slice(last_Space, +1);

    document.getElementById("tulemus1").innerHTML = "Esimesed 5 märki" + first_Five;
    document.getElementById("tulemus2").innerHTML = "Viimased 5 märki" + last_Five;
    document.getElementById("tulemus3").innerHTML = "Keskmised 5 märki" + middle_Five;
    document.getElementById("tulemus4").innerHTML = "Kus on esimene tühik" + first_Space;
    document.getElementById("tulemus5").innerHTML = "Esimene sõna" + first_Word;
    document.getElementById("tulemus6").innerHTML = "Viimane sõna" + last_Word;
}
