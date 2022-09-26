//-------tipos de datos en javascript----------
/**/
//tipo de dato string 
var nombre = "hubmerto";
console.log(nombre);
//tipo de dato int numerico 
var edad = 5;
console.log(edad);

//hacemos dinamica una varible cambiando su valor en posiciones posteriores de codigo
nombre = 10;
console.log(nombre);
//preguntamos que tipo de valor tiene una varible
console.log(typeof nombre);
//--------------------------------------------------
edad = 10.6;
console.log(typeof edad);
//en javaScript las variables son dinamicas por que pueden cambiar su tipo 


//tipo de object 
var objeto = {
    nombre: "Juan",
    edad: 25,
    apellido:"Perez",
    telefono:"5516721152"

};
console.log(objeto)

//tipo de dato booleano
var bandera = true;
bandera= false
console.log(bandera);
console.log(typeof bandera)

//tipo de dato function
function miFuncion(){
    console.log("el nombre de la funcion es mi funcion");
}
miFuncion();
console.log(typeof miFuncion)

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)
console.log(typeof simbolo)

//tipo de dato Clase tmabien es una Funcion
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//tipo de dato undefine 
var x;
console.log(x)
console.log(typeof x);

//null es ausencia de valor es diferente de undefined 
//debido a que no posee valor 
var y = null;
console.log(y);
console.log(typeof y );

var k = undefined;
console.log(k);
console.log(k);

//tipo de dato array 
var autos  = ['bmw', 'audi', 'nissan'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z)
var varibaleDos = [];
console.log(typeof varibaleDos)
