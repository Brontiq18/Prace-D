function walidacja_danych(){
    var wpis=1;
    var braki=" ";
    if (document.getElementById("imie").value == ""){
        braki += "imie\n"
        wpis=0;
    }
    if (document.getElementById("email").value == ""){
        braki += "email\n";
        wpis=0;
    }
    if (document.getElementById("ocena").value == ""){
        braki += "ocena\n";
        wpis=0;
    }
    if (document.getElementById("data").value == ""){
        braki += "data\n";
        wpis=0;
    }
    if (wpis)
    alert("obowiązkowe pola zostały wypelnione. ");
    else alert("Nie wypełniono obowiązkowych pól:\n" + braki);  
}