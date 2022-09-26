//--------------------  ARREGOS EN JAVASCRIPT-------------------
//es un tipo object que permite almacenar varios valores


//let autos = new Array("BMW","Mercedez benz","Volvo"); forma antigua
//la refrencia en memoria no se modifica el valor de la variable si 
const autos = ["BMW","Mercedez Benz","Volvo"];
console.log(autos);
console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i=0; i < 2; i++){
    console.log(autos[i])
}
//length se utiliza sin corchetes 
for(let i =0; i< autos.length; i++){
    console.log(i + ":" + autos[i]);
}
autos[1] = "lamborghini";
console.log(autos.length);
console.log(autos[1]);

//agrear elementos a un arreglo
//estos elementos se arreglan al final del arreglo 
//mediante estos metodos
autos.push("audi");
console.log(autos[3]);
console.log(autos.length);

//agregar elementos sin push
autos[autos.length] = "cadillac";
autos[6] = "porsche";//haciendo esto queda un indice vacio por eso no se remcomienda

autos[5]= "buick";


for(let j = 0; j < autos.length;j++){
    console.log(autos[j]);
}


///------------------preguntar que tipo de datos es el array-------------------
//apartir de ecma script 2015
//Array.isArray(aqui se evalua lo que se piense que es array)

console.log(Array.isArray(autos));
//metodo dos
//mediante el uso de instanceOf la pregunta es: si es una instancia de Array
console.log(autos instanceof Array);
