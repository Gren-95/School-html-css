        /*  1. Deklareeri üks muutuja, anna talle väärtuseks oma õnnenumber.
            2. Väljasta selle muutuja andmetüüp.
                undefined, number, string, boolean
            3. Väljasta info selle arvu kohta.        
        */
            let lemmikarv;  //andmetüüp undefined, tüüp puudub
            lemmikarv = 7;    //arv ehk number
            document.write("Data type is " + typeof (lemmikarv) + ".<br>");
    
            /* Andmetüüp eesti keeles */ 
            let tyyp = "undefined"; //omistamine
            if (typeof (lemmikarv) == "number") {
                tyyp = "arv";
            } else if (typeof (lemmikarv) == "boolean") { tyyp = "tõeväärtus"; }
            else {
                tyyp = "string";
            }
            document.write("Antud muutuja andmetüüp on " + tyyp + ".<br>");
            // bit.ly/ametikoolRakvere
    
            /*  1. Paaris või paaritu arv
                2. Millega jagub?
                3. Mitmekohaline?
                4. Positiivne või null või negatiivne */ 
    
            //Paaris või paaritu?
            if(lemmikarv%2==0){  //== võrdlemine, === kontrollitakse ka andmetüüpi
                document.write("See arv on paarisarv.<br>");
            }else{
                document.write("See arv on paaritu arv.<br>");
            }
    
            //Kas jagub 3ga?
            if(lemmikarv%3>0){  //lemmikarv%3!=0
                document.write("Ei jagu 3-ga!");
            }else{
                document.write("Jagub 3-ga!");
            }
            document.write("<hr>");
            
            let arvTekstina=String(lemmikarv);   //tüübiteisendus Number --> String
            let markideArv=arvTekstina.length;  //märkide arv selles tekstis, stringi pikkus
            document.write("See arv on " + markideArv + "-kohaline.<br>");
    