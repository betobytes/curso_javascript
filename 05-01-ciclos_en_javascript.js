//------------CICLOS EN JAVASCRIPT -----------------------
let i=0;

while(i <10){
    //se hace uso de un postincremento se usa y luego se incrementa
    console.log(i);
    i++;
}
console.log(i);
let e = (i == 10) ? "fin del ciclo while":"";
console.log(e);

//bucle mediante el uso de do while (pero nadie hace esto)
let j = 3;
j = 0;
do{
    console.log(j);
    j++;
}while(j < 5);
console.log("fin del ciclo while numero: ", + j);

//ciclo for en javascript 
for(i = 0; i < 15; i++){
    console.log(i);
}
console.log(i);
for(let k = 0; k < i; k++){
    console.log(k);
}
console.log("el valor final es: ", + i);

//uso de la palbra reservada break
for(let x = 1; x<10; x++){
    if(x % 5 == 0){
        console.log(x)
        break;
    }
    console.log(x)
}
console.log("fin del ciclo for");

//uso de lapalabra reservada continue
//continue slata de iteracion en iteracion
for(let y = 0; y <= 10; y++){
    if( y%2 !== 0){

        continue;//ir a a la siguiente iteracion 
    }else{
        console.log(y);
    } 
}

//------------etiquetas (no es recomendable)----------
inicio:
for(let r = 0; r <= 10 ; r++){
    if(r%2 == 0){
        console.log(r);
        continue inicio;//aqui salta a inicio 
        //break inicio; ----rompe el codgigo y va a inicio
    }
}