

alert('¡Bienvenida y bienvenido a nuestro sitio web!')

let nombre = 'luna' ;
let edad = 25; 
let numeroDeVentas = 50;
let saldoDisponible = 1000;

let mensajeDeError = '¡Error! Completa todos los campos';
alert(mensajeDeError);


let nombreUsuario = prompt('Nombre de usuario:');
let edadUsuario = prompt('Escriba su edad');

edadUsuario = Number(edadUsuario);

if (edadUsuario >= 18) {
    alert('¡Puede obtener su licencia de conducir!');
} else {
    alert('Lo lamento, tenes que ser mayor para conducir')
}