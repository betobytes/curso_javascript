//-----------operadores de asignacion---------

// /=
// %/
// etc 

//operador de asignacion compuesto 
let a = 2;

a += 3;// a = a + 3
console.log(a);

a -= 2; 
console.log(a);

let d = 3, b = 2, c = "3", e = 3;
let z =  (d == b);  

console.log(z);
z = (d == e)
console.log(z);

//comparador de igualdad estricta
z  = (d===c); //revisa si los valorea son iguales y del mismo tipo 
console.log(z);

z = (d == c);
console.log(z);

//para evaluar si el valor es  diferente != 

z = (b != d);
console.log(z);

z = (d !==c );
console.log(z)

z = (b < d); 
console.log(z);

z = (b >= d);
console.log(z);

z = ( d >= c);
console.log(z);

z = (d > e || d < e);
console.log(z);

//aplicando teoria de operadores con teoria de if else 
let num = 10;
//num = 9
if(num % 2 == 0){
    console.log("es un numero par"); 
}
else{
    console.log("es un numero impar");
}

let edad = 12, edad_adulta= 18;
edad = 20;
if(edad >= edad_adulta){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad ")
}

//------------------ejemplo and &&-----------------
//es true solo si los dos operandos son ciertos 
let valor_uno = 5, min = 0, maxim = 10;
valor_uno = 35
if (valor_uno >= min && valor_uno <= maxim){
    console.log("dentro de rango");
} 
else{
    console.log("fuera de rango");
}

//------------------ejemplo or ||---------------- 
//si alguna de las dos condiciones son verdaderas se va a true 
let vacaciones = false, dia_descanso = false;
dia_descanso = true;
if(vacaciones || dia_descanso){
    console.log("tiene dia libre");
}else{
    console.log("no tiene dia libre"); 
}



//----------------------este es un operdador ternario-------------------- 
//sustituimos el uso del if else con una expresion de una sola linea 
// (condicion) ? true : false;

let valor = 3, valor_dos = 3;  
let s =(valor >= valor && valor_dos < valor) ? true : false; 
 console.log(s);

let i = (3 == 2) ? true : false;
console.log(i); 

vacaciones= false;
dia_descanso = false;
let papa = (vacaciones || dia_descanso) ? true : false;
console.log(papa)

//convertir numero a string in javascript 
let  miNumero = "10x";
console.log(typeof miNumero);
//la funcion number cambia el tipo de dato string a number 

let edadPersona = Number(miNumero);//se pasa el dato miNumero a al funcion Number
console.log(typeof edadPersona);

if(edadPersona >= 18){
    console.log("puede votar");
}else{
    console.log("muy joven para votar");
}
//me empiezan a gustar eso de usar opereadores ternarios 
edadPersona = 18
let resultado  = (edadPersona < 18) ? "muy joven para votar":"puede votar";
console.log(resultado)

//----------------valores nota a numbber---------------
let var_tres = "10s";
let var_cuatro = Number(var_tres);
//asi arroja el valor (NOT A NUMBER) NaN
console.log(var_cuatro);
if (isNaN(var_cuatro)){
    console.log(" no puede realizar el codigo");
}else{
    let var_cinco = (var_cuatro > 0) ? "esta dentro de rango" : "fuera de rango"
    console.log("puede realizar el codigo");
    console.log(var_cinco)
}

// ----------------precedencia de operadores---------------------
let v_uno = 5;
let v_dos = 10;
let v_tres = ++v_uno + v_dos--; //al declararse aqui su valor es 10 pero
console.log(v_uno);
console.log(v_dos);//tiene pendiente un decremento que se aplica aqui 
console.log(v_tres);

//se evalua --> pero primero son la mult y la div al final la suma
//  respuesta_uno = 4 +((5*6)/3) 
let respuesta_uno = 4 + 5 * 6 / 3;
console.log(respuesta_uno)
//respuesta_dos= ((9*6)/3) 
let respuesta_dos = (4 + 5)*6/3;
console.log(respuesta_dos);


