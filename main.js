function walidacja_danych(){
    var wpis=1;
    var braki="";
    if (document.getElementById("imie").value == ""){
        braki += "imie\n"
        wpis=0;
    }
    if (document.getElementById("nazwisko").value == ""){
        braki += "nazwisko\n";
        wpis=0;
    }
    if (wpis)
    alert("obowiązkowe pola zostały wypelnione. ");
    else alert("Nie wypełniono obowiążkowych pól:\n" + braki);  
}