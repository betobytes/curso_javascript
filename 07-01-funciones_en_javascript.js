//-------------------------------METODOS EN JAVASCRIPT----------------
//la primer letra de una funcion es minuscula 
function miFuncion(a, b){
    console.log("suma: " + (a + b));

}//los bloques de codigo de la funcion no terminan en punto y coma 

miFuncion(2,3);
miFuncion(1,1);
miFuncion(4,4);
//la funcion la podemos mandar a llamar antes de definir o despues de definir 
//la funcion la podemos poner en cualquier parte de nuestro programa 
//lenguaje c lo recomiend antes aunque yo lo hago despues igual esta mal
//javascript agrega  de forma automatica el valor de return 
function miFuncionDos(a, b){
    return a+b;

}
console.log(miFuncionDos(3,2));
let resultado = miFuncionDos(4,4);

console.log(resultado);

//finciones de tipo expresion
//en este caso como si es una linea de codigo se le pone ; 
let x = function(a,b){return  a * b}; //decalracion de una funcion de tipo expresion 

resultado = x(1,2); //se manda a llamar a al varible que almacena la referencia a una funcion
console.log(resultado)

let dividir = function(a,b){return a / b};
resultado = dividir(6,2);
console.log(resultado);

//------------------funciones autoinvocadas (self-invoking) --------------------------
//funcion anonima
(function(){
    console.log("ejecutando la funcion ")
})();//esta funcion solo se puede mandar a llamar una vez 

(function(a, b){
    console.log("ejecutando la suma de  a+b: " + (a +b ))
})(3,5);

//---------------------funciones como objetos-------------------------
console.log(typeof miFuncion)

//para saber cuantos argumentos pose la funcion
//funcion o metodo son lo mismo  
//las funciones tambien son objetos en javascript 
function mi_funcion(a, b){
    console.log(arguments.legnth);
    return a + b;
}
let miFuncionTexto = mi_funcion.toString();
console.log(miFuncionTexto); 

//------------------funciones flecha (funcion de tipo expresion)------------------------
//introducidas a partir de ECMASCRIPT6
//1.- se declar la varible de tipo etatica 
//2.- se asignan las variables con las que trabajara la funcion
//se escribe el proceso de la funcion inciando con una flecha 
const funcion_tipo_flecha = (a,b) => a + b;//toda la funcion se asigna en un espacio de memoria 
console.log(funcion_tipo_flecha(2,3));
console.log(funcion_tipo_flecha(5,3));

//----------------argumentos y parametros en funciones javascript----------------------------
//se pueden manejar de  la misma forma en la practica pero no son lo mismo
//parametros: la lista de valores que recibe una funcion (variable de la funcion)
//argumentos: son los valores reales que se signan a los parametros (dato asignado a la variable)

function suma_dos(a,b){
    //al ser un objeto posee arrays 
    //podemos acceder a los valores brindados a los parametros 
    console.log(arguments[0]);//accedemos al primer parametro
    console.log(arguments[1]); //accedemos al segundo parametro
    return a+b;
}
resultado = suma_dos(9,1);
//no es necesario pasar todos los valores a una function 
//siendo asi:
function suma_tres(c,d){
    console.log(arguments[0]);
    console.log(arguments[1]);//si no se pasa el valor que va aqui da:
    return c + d;
}
resultado = suma_tres(4);
console.log(resultado);//ya que no se puede sumar argumentos que no son da not a number

function suma_cuatro(a=2,b=3){
    console.log(arguments[0]);//no recibio ningun argumento por eso da:
    console.log(arguments[1]);//no recibio ningun argumento por eso da:
    return a + b;
}
console.log(suma_cuatro());//pero el prametro si posee informacion por eso realiza la operacion
//tiene mayor jerarquia pasar los argumentos a pramatros;
console.log(suma_cuatro(3,4));
//no necesariamente tienen que coicidir los argumentos con los parametros y que si se pasa oro argumento se genera el espacio

//--------------ejemplo sumar todos---------------
let resultado_final = sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log(resultado_final);
//la lista de parametros esta vacia
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        //arguments[i];//se obtiene automaticamente todos los valores del argumento
        suma += arguments[i];
    }
    return suma;
}
console.log(resultado_final);

//paso por valor o paso por referencia 
//tipo de valor primitivo
let y = 10;//no tiene propiedades ni metodos

//................................PASO POR VALOR................................
//crearemos un metodo para cambiar un valor desde el metodo 
//se cre auna copia del valor de la variable 
function cambiar_valor(a){
    a  = 20;
    return a;
}
console.log(y);
console.log(cambiar_valor(y));
//esto sucede por que el argumento (y) se pasa al parametro 
// luego el parametro se modifica el valor y asi ya lo cambio  
//si no se poene el return la variable a s edestruye 
function cambiar_valor_dos(a){
    a = 20;
}
console.log(y);
console.log(cambiar_valor_dos(y));//en este caso se destruye el valor de a 

//................................PASO POR REFERENCIA...............................
//se crea un objeto el cual posee porpiedades y metodos 

const persona = {
//---referencia 
    nombre: 'juan',
    apellido:'perez',
    edad: 18
};
console.log(persona)
//paso por referencia desde el metodo
//persona  y p apuntan a los mismos valores en memoria .nombre y .apellido
function cambiar_valor_objeto(p){
    p.nombre='humberto'; //eccedemos a la referencia mediente la variable p y modificamos el valor  
    p.apellido = "munoz";
    p.edad = 25;
}
//la variable p se destruye despues de realizar su chamba
//son metodos para reescirbir valores de objetos haciendo uso de funciones
cambiar_valor_objeto(persona);
console.log(persona);
