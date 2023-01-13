let jugar = prompt("Queres jugar con nostros, escribe si o no");
const puntosCorrecto = 10;
const puntosIncorrecto = -10;
let total = 0;
let rescat;

cerrarVentana =() => window.close();
resultado=() => alert("El total de puntos acumulados es " + total);

function correcto(){
    alert("Sumaste 10 puntos");
    console.log(puntosCorrecto);
    total= total+puntosCorrecto
}

function incorrecto(){  
    alert("Equivocado!! Te sacamos 10 puntos!!");
    console.log(puntosIncorrecto );
    total= total+puntosIncorrecto;
}

function categoria(){
    switch(total){
        case 10:    
        case 20:
            rescat= "Agarra los libros!!!!!"
            break;
        case 30:
        case 40:
            rescat="Ponete las pilas!!!!!!"
            break;
        case 50:
        case 60:
            rescat="MMMMMMM, maso!!!!!"
            break;
        case 70:
        case 80:
            rescat="Te falta poco, a estudiar!!!!!"
            break;
        case 90:
        case 100:
            rescat="Sos un genio!!!!!"
            break;
        default:
            rescat="No hiciste nada";
    }
    alert(rescat);
}

if (jugar == "si"){
    alert("Muy bien !!! Comencemos!!!");
}else if (jugar == "no"){       
    alert("Gracias!!! Hasta la Proxima!!!");
    cerrarVentana()
}else{
    while (jugar != "si" && jugar != "no"){
    alert( "Ingresaste " + "\n" + "     " + jugar+ "     " );
    jugar = prompt("Solamente puedes escoger : si o no");
    if (jugar == "si"){
        alert("Muy bien !!! Ahora si!!!");
    }else if (jugar == "no"){
        alert("Lo sentimos mucho!!! Adios!!!");
        cerrarVentana();
    }
    }

}

// Create an array of capital city objects
const capitalCities = [
    {name: "Paris", country: "France"},
    {name: "Madrid", country: "Spain"},
    {name: "Rome", country: "Italy"},
    {name: "London", country: "United Kingdom"},
    {name: "Berlin", country: "Germany"}
];

// Select a random capital city object from the array
var currentCapital = capitalCities[Math.floor(Math.random() * capitalCities.length)];

// Ask the user to guess the capital city
var userGuess = prompt("What is the capital city of " + currentCapital.country + "?");

// Check if the user's guess is correct
if (userGuess === currentCapital.name) {
    alert("Correct! The capital city of " + currentCapital.country + " is " + currentCapital.name + ".");
} else {
    alert("Incorrect. The capital city of " + currentCapital.country + " is actually " + currentCapital.name + ".");
}

