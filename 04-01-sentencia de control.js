//-----------------------SENTENCIA IF ELSE------------------------
//siempre es buena idea agregar llaves 

let  condicion = true;
if (condicion){
    console.log("es cierto");
}else{
    console.log("condicion falsa");
}

//el operador ternario tambien puede avalua condicionales verdero falso
let x = (condicion) ? "condicion verdadera":"condicion falsa";
console.log(x);

let numero = 3;
//numero = 5;
if(numero == 1){
    console.log("primera opcion");
}else if(numero == 2){
    console.log("segunda opcion");
}else if(numero == 3){
    console.log("tercera opcion");
}else if(numero == 4){
    console.log("cuarta opcion");
}else{
    console.log("numero desconocido");
}

//----------ejemplo mes del año---------------
let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion  = "Invierno";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}else if(mes == 6 || mes == 7 || mes == 8 ){
    estacion ="Verano";
}else if(mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}else{
    estacion="valor inexistente";
}
console.log(estacion);

let hora = 0;
let estado;

if(hora >= 6 && hora <12){
    estado = "buenos dias";
}else if(hora >= 12 && hora < 19 ){
    estado = "buenas tardes";
}else if(hora >= 19 && hora < 24){
    estado = "buenas noches";
}else if(hora == 24 || hora < 6){
    estado = "descanso";
}else{
    estado = "inexistente"
}
    console.log(estado);

//-------------sentencia switch-----------------
let numero_dos = 3;
let valorTexto = "valor desconocido";

switch(numero_dos){
        case 1:
            valorTexto = "primer caso";
            break;
        case 2:
            valorTexto = "segundo caso";
            break;
        case 3: 
            valorTexto = "tercer caso";
            break;
        case 4:
            valorTexto = "cuarto caso";
            break;
        default:
            valorTexto = "caso no encontrado"
}

console.log(valorTexto);
console.log(typeof valorTexto);
console.log(numero_dos);
console.log(typeof numero_dos);

//--------------SWITCH----------------
//calculo de la estacion del año con estructura switch
let mes_año = 12;
let estacion_año = "estacion desconocida";

switch(mes_año){
    //se pueden usar multiples valores para el case 
    case 1: case 2: case 12:
        estacion_año = "Invierno";
        break;
    case 3: case 4: case 5:
        estacion_año = "Primavera";
        break;
    case 6: case 7: case 8:
        estacion_año = "Verano";
        break;
    case 9: case 10: case 11:
        estacion_año = "Otoño";
        break;
    default:
        estacion_año = "ingrese un valor entre 1 - 12 (valor no valido)";

}
console.log(estacion_año);

//uso de cadenas con switch son de comparacion estricta
