
let tekst = "On kolmapäev, tore päev, tore päev!";
let sona = "päev";

document.write("Märke tekstis " + tekst.length + ".<br>");
document.write("Sõna sisaldab " + sona.length + " märki.<br>");

//Otsimine
let pos = tekst.indexOf("tore");  //Mitmendas positsioonis on sõna "tore"
document.write("Sõna \"tore\" algab " + pos + ". positsioonist.<br>");

pos = tekst.indexOf(sona);
document.write("Sõna \"" + sona + "\" algab "
    + pos + ". positsioonist.<br>");

pos = tekst.indexOf("e");
document.write("Täht \"e\" esineb kohal " + pos + ".<br>");
pos = tekst.indexOf("e", 11);  //Vaata alates 11.ndast positsioonist
document.write("Järgmine täht \"e\" esineb kohal " + pos + ".<br>");

let pos1 = tekst.lastIndexOf(sona);  //Alustab otsimist stringi lõpust, otsib viimast
document.write("Sõna \"" + sona + "\" algab "
    + pos1 + ". positsioonist.<br>");

//Ei leitud
sona = "reede";
pos1 = tekst.indexOf(sona);  //Kui ei leita, siis tulemus -1
document.write("Tulemus on " + pos1 + ".<br>");
if (pos1 == -1) {
    document.write("Ei leitud sellist fraasi.<br>");
}
