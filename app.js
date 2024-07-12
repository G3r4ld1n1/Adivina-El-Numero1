let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;
let MaximoIntentos = 10;

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número del 1 al 10";
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function VerificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó
        if (numeroDeUsuario>numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        }else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }

        if (intentos >= MaximoIntentos){
            asignarTextoElemento("p", `Has alcanzado el número máximo de intentos ${MaximoIntentos}. El número secreto era ${numeroSecreto}.`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            return;
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

//return significa que nos va a dar un numero
function generarNumeroSecreto() {
   // return Math.floor(Math.random()*10)+1;
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

   console.log(numeroGenerado);
   console.log(listaNumerosSorteados)
   //si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento ("p", "Ya se sortearon todos los números posibles.")
} else{
   //si el número generado esta incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)){
       return generarNumeroSecreto();
   }else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
}
}

function condicionesIniciales() {
    asignarTextoElemento ("h1", "¡Juego del número secreto!");
    asignarTextoElemento ("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}

condicionesIniciales();













