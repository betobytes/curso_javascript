//palabras reservadas que sustituyen var (variables)
// ----let
//-----const

//esot es una mala praxis 
nombre =  "juan";//es posible declarar una variable sin hacer uso de palabras reservadas
console.log(nombre);

//se recomienda este uso 
let nombreDos = "juan";
console.log(nombreDos)

const apellido = "perez";
//apellido = "lara";

console.log(apellido);

//----ejemplo dos uso let
//se recomiendo tener en cuanta el caseSensitive

let nombreCompleto = "Juan Perez";
console.log(nombreCompleto)

let x , y;
x = 10, y = 20;
let z = x + y;

console.log(z);

let nombreCompletoDos = "Jose Sosa";
let nombrecompletodos = "Vicente Fernandez";

console.log(nombreCompletoDos)
console.log(nombrecompletodos)

//no se puede instanciar una varible usando numeros 
//let 1nombre  = "algo";//esot esta mal 

//----- no puedes instanciar varibles con palabras reservadas----

let _break = 10;//no hagas esto <-----
console.log(_break)

