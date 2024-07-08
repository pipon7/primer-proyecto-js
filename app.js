/* comillas invertidas ` ` para llamar a una variable dentro de algun 
parentesis o algo */

//Variables
/* math.random() da un num random
math.random()*10 uno random pero hasta el 10
math.floor(math.random()*10) random hasta el 10 pero solo numeros enteros
math.floor(math.random()*10)+1 para evitar el 0 y que pueda llegar a 10 tmb ya que el *10 es un multiplicador pq el math random elige un numero entre 0 y 0,99 entonces con el math flor
si se multiplica el max 0,99 por 10 llegaria a 9, y con el +1 se le suma un 1 al num que se genere*/
let numeroSecreto = Math.floor(Math.random()*10);
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'; (MAS FACIL HECHO EN LA LINE 21)
let maximosIntentos = 3;

// console.log(numeroSecreto) para ver en la consola el num secreto
// != Es diferente DE...
// El codigo while se ejecutara mientras se de la condicion que esta en los ()
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt('Me indicas un numero entre el 1 y el 10 por favor:'));
    
    // Imprime en la consola de la pagina (f12) el numero escrito 
    console.log(typeof(numeroUsuario));
    
    //Comparacion
    if (numeroUsuario == numeroSecreto) {
        // Acertamos el numero 
        alert(`Adivinaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        /* DENTRO DE LOS TEMPLATES STRINGS TMB SE PUEDE ESCRIBIR CODIGO:
         en ${XXX} el ? remplaza al if y el : al else */ 
    } else if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor.');
    } else {
        alert('El numero secreto es mayor.')
    } 
    // Incrementamos el contador cuando no acierta
    // intentos = intentos + 1; o intentos += tambien:
    intentos++; 
    console.log(intentos)
    //palabraVeces = 'veces';
    // Cambia la palabra vez a veces cuando el numero de intentos es + de 1
    if (intentos > maximosIntentos) {
        alert(`Llegaste al numero maximo de ${maximosIntentos} intentos, el numero secreto era ${numeroSecreto}.`);
        break;
        // Break: Corta el bucle aunque no se cumpla el principal objetivo.
    }   
}
