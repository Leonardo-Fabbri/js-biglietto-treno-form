/*indentazione= shift+alt+f*/
var name=("");
//euro x km.
const PREZZO_KM=0.21;
//sconti
var over65= 0.6;
var  young= 0.8;
var middleAge;
// var km= getElementById("numero_km")




document.getElementById("genera_biglietto").addEventListener("click", function () {
    var name= document.getElementById("name").value;
    console.log(name)
    var km= document.getElementById("numero_km").value;
    console.log(km);
    var age= document.getElementById("age").value;
    console.log(age);

    if (over65>65){
        console.log(km*PREZZO_KM*over65);
        document.getElementById("res_prezzo").innerHTML=km*PREZZO_KM*over65+("prezzo")+(" ")+("scontato");
        
    } else if (young<18) {
        console.log(km*PREZZO_KM*young);
        document.getElementById("res_prezzo").innerHTML=km*PREZZO_KM*young+("prezzo")+(" ")+("scontato");
      
    } else{
        console.log(km*PREZZO_KM)
        document.getElementById("res_prezzo").innerHTML=PREZZO_KM*km+("euro");
    
    }
    // console.log("fineclick");

    document.getElementById("res_name").innerHTML=name;
    document.getElementById("res_km").innerHTML=km+("km");
    document.getElementById("res_age").innerHTML=age;
    
   
    
    
    

}  
);






