/* operadores en javascript 
operador             description

 +                    addition(suma)
 -                    substraction(resta)
 /*                    multiplication
 **                   exponentiation(EcmaScript 2016)
 /                    divsion
 %                    modulo (residuo)
 ++                   incremento
 --                   decremento

 */

let a = 3, b = 2;
let z = a + b;
console.log("resultado de la suma: " +  z);

z  = a - b;
console.log("el resultado de la resta es: " + z);

z = a * b;
console.log("resultado de la multiplicacion" + z);

z = a / b; 
console.log("el resultado de la division es: " + z);

z = a % b;
console.log("el resultado del modulo(residuo): "+ z);

z = a ** b;
console.log("el resultado del operador exponente: "+ z);

//operadores de incremento y decremento 
console.log(a);
console.log(b);

//preincremento 
z = ++a;
console.log(a);
console.log(z);

//postincremento 
z = b++;
console.log(z);
//primero se uliiza el valor original de la varibale 
//la segunda vez que se utiliza se incrementa
console.log(b);

//decremento
//prederemento;

z = --a;
console.log(z);

//postdecremento
z = a--;
console.log(z);
console.log(a);

//------------------------PRECEDENCIA DE OPERADORES---------------------------- 
let alfa = 3, omega = 2, teta = 1, delta= 4;

//las expresiones se evaluan de izquierda a derecha 
//--------------->
//  k  = 3 * 2 = 6 y luego se suma 1 = 7
let k =  alfa * omega + teta;
console.log(k);
//K = 1 + (3*2) le da prioridad a 3*2= 6 siendo 1 + 6 = 7  
k = teta + alfa * omega;
console.log(k);
//recuerda simba los () parentesis siempre se evaluan primero 
//luego los corchetes [] 
//despues opradores de incremento y decremento ++  --
// multiplicacion division y modulo * / %
//suma y resta + - 
//y luego los de condicionales <= >=  y asi 

//   1 + (3*2)=6/4 = 1.5 por lo tanto = 1+1.5= 2.5 
k = teta + alfa * omega /delta; 
console.log(k);

//3 * 2 = 6 + 1/4 = 0.25 por lo tanto 6 + 0.25 = 6.25
k = alfa * omega + teta /delta;
console.log(k);
//donde 3 * 2 = 6 +1 = 7 --> 7/4 = 1.75
k = (alfa * omega + teta)/delta;
console.log(k);

