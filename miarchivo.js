let jugar = prompt("Queres jugar con nostros, escribe si o no");
const puntosCorrecto = 10;
const puntosIncorrecto = -10;
let total = 0;
let rescat;
let i = 0;
let paises = []

cerrarVentana =() => window.close();

const correcto = () =>{
    alert("Sumaste 10 puntos");
    console.log(puntosCorrecto);
    total= total+puntosCorrecto;
}

const incorrecto = ()=>{  
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

class paisesDatos {
    constructor(nombre,capital,habitantes){
    this.nombre= nombre;
    this.capital= capital;
    this.habitantes = habitantes;
    }
    infoPais(){
        return "El nombre del pais es " + this.nombre + " y su capital es " + this.capital +  ". Tiene " + this.habitantes + " de habitamtes."
    }

}

const pais1 = new paisesDatos ("Argentina", "Buenos Aires", 47327407);
const pais2 = new paisesDatos ("Bolivia", "La Paz", 11832986);
const pais3 = new paisesDatos ("Cuba", "La habana", 11317498);
const pais4 = new paisesDatos ("Canada", "Ottawa", 38929902);
const pais5 = new paisesDatos ("Alemania", "Berlin", 83811678);
const pais6 = new paisesDatos ("Francia", "Paris", 66099138);
const pais7 = new paisesDatos ("Nigeria", "Abuya", 220546713);
const pais8 = new paisesDatos ("Japon", "Tokio", 126212981);
const pais9 = new paisesDatos ("Rusia", "Moscu", 146085669);
const pais10 = new paisesDatos ("Mexico", "Ciudad de Mexico", 163671888);

paises = paises.concat([pais1, pais2, pais3, pais4, pais5, pais6, pais7, pais8, pais9, pais10]);

const preguntaRandom =() => paises[Math.floor(Math.random() * paises.length)]; 

let pregunta1 = preguntaRandom ();

let pregunta2 =""
do{pregunta2 = preguntaRandom()}
while(pregunta2==pregunta1)

let pregunta3 =""
do{pregunta3 = preguntaRandom()}
while(pregunta3==pregunta2 || pregunta3==pregunta1)

let pregunta4=""
do {pregunta4 = preguntaRandom()}
while(pregunta4==pregunta1 || pregunta4 == pregunta2 || pregunta4==pregunta3);

const generarNumeroAleatorio =() => Math.floor(Math.random() * 100000000);


let respuesta1= generarNumeroAleatorio();
let respuesta2= generarNumeroAleatorio();
let respuesta3= generarNumeroAleatorio();
let respuesta4= generarNumeroAleatorio();

let preguntas = [pregunta1, pregunta2, pregunta3, pregunta4];

for(; i < preguntas.length; i++){
    let pregunta =  document.getElementById("preg" + (i+1));
    pregunta.innerText = "Habitantes de " + preguntas[i].nombre;
}



let boton1 = document.getElementById("cantHabUno")
boton1.innerHTML= "<button  onclick =  correcto();alert(pregunta1.infoPais());>"+ pregunta1.habitantes +"</button><button  onclick = incorrecto()>"+ respuesta1 + "</button>"
let boton2 = document.getElementById("cantHabDos")
boton2.innerHTML= "<button  onclick =  correcto();alert(pregunta2.infoPais());>"+ pregunta2.habitantes +"</button><button  onclick = incorrecto()>"+ respuesta2 + "</button>"
let boton3 = document.getElementById("cantHabTres")
boton3.innerHTML= "<button  onclick =  correcto();alert(pregunta3.infoPais());>"+ pregunta3.habitantes +"</button><button  onclick = incorrecto()>"+ respuesta3 + "</button>"
let boton4 = document.getElementById("cantHabCuatro")
boton4.innerHTML= "<button  onclick =  correcto();alert(pregunta4.infoPais());>"+ pregunta4.habitantes +"</button><button  onclick = incorrecto()>"+ respuesta4 + "</button>"

const paisesAprendidos = paises.map ((paisesapren) => paisesapren.nombre)
const x = paisesAprendidos.join("\n ")

resultado=() => {alert("El total de puntos acumulados es " + total );
alert("Aprendiste sobre los siguientes paises ="+ "\n" + x)
}