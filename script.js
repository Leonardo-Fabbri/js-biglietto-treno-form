/*indentazione= shift+alt+f*/
//euro x km.
const PREZZO_KM=0.21;
//sconti
var over65= 0.6;
var  young= 0.8;



document.getElementById("genera_biglietto").addEventListener("click", function () {
    var name= document.getElementById("name").value;
    console.log(name)
    var km= document.getElementById("numero_km").value;
    console.log(km);
    var age= document.getElementById("age").value;
    console.log(age);

    if (age=="anziani"){
        prezzo_biglietto= km * PREZZO_KM*over65;
        console.log(km * PREZZO_KM*over65);
        document.getElementById("res_prezzo").innerHTML=km * PREZZO_KM*over65+("prezzo")+(" ")+("scontato");
    } else if (age=="minorenni") {
        console.log(km * PREZZO_KM*young);
        document.getElementById("res_prezzo").innerHTML=km * PREZZO_KM*young+("prezzo")+(" ")+("scontato");
    } else {
        document.getElementById("res_prezzo").innerHTML=km * PREZZO_KM+("euro");
    
    }
    
    document.getElementById("res_name").innerHTML=name;
    document.getElementById("res_km").innerHTML=km+("km");
    document.getElementById("res_age").innerHTML=age;
    document.getElementById("iltuobiglietto").className="show";
}  
);
document.getElementById("annulla").addEventListener("click", function () {
    document.getElementById("iltuobiglietto").className="hidden";

}
)
