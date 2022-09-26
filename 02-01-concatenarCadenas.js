//-----------------concatenacion de cadenas en JavaScript-----------------------

var nombre = "Juan";
var apellido = "Perez";

//concatenar
var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

var nombreCompletoDos = "Humberto" + " " + "Muñoz"
console.log(nombreCompletoDos)

var delta = nombre + 325;
console.log(delta)
console.log(typeof delta)

//las expresiones en javascript se evaluan de izquierda a derecha 
var  alfa = nombre + 2 + 4;
console.log(alfa); 

var  omega = nombre + (2+4);
console.log(omega); 

//primero evalua los numeros y luego la concatenacion 
x = 2 + 3 + nombre;
console.log(x) 