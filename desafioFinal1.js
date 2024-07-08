// Variables
let ingresarNumero = 0;
let numeroMaximo = 1000;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let intentos = 1;
let maxIntentos = 5;
let numeroMinimo = 1;
/*  Es importante el orden de las variable, si vamos a nombrar a una variable dentro de otra, esta tiene que estar definida con antarioridad, 
no puedo pedir que el numero secreto sea hasta el numero maximo si estoy haciendo esa variable antes de crear una variable del valor del numero maximo */


console.log(numeroSecreto)
// Bucle
while(ingresarNumero != numeroSecreto) {
    // Pedir numero
    ingresarNumero = parseInt(prompt(`Ingresa un numero entre el ${numeroMinimo} y el ${numeroMaximo} por favor:`));
    console.log(typeof(ingresarNumero));

    // Comparador
    if (numeroSecreto == ingresarNumero) { // Si adivina
        alert(`Felicitaciones, adivinaste el numero secreto en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);    
    } else { // Si no adivina
        alert(`Numero incorrecto, el numero secreto es ${ingresarNumero > numeroSecreto ? 'menor.' : 'mayor.'}`);
    }
    // Intentos
    if (intentos >= maxIntentos) {
       alert(`Ingresaste el numero maximo de intentos que es ${maxIntentos}, el numero secreto era ${numeroSecreto}.`);
       break;
    }
    intentos++;
    console.log(intentos);
}