//--------------------------OBJETOS EN JAVASCRIPT (OBJECTS)-------------------------
//poseen propiedades y objetos 

let x = 10;
console.log(x.length);

//se asigna una referencia en memoria a la varible perro
//con la referencia podemos acceder a las propiedades
let perro = {
    nombre: "firulais",
    raza:"pitbull",
    mail:"fpitbull@mail.com",
    edad: 5
}
console.log(perro.nombre);
console.log(perro.raza);
console.log(perro.edad);
console.log(perro.mail);

for(j in perro){
    console.log(perro[j])
}
//agregar metodos a objetos en javascript
let gato = {
    nombre:"michi",
    raza: "normal",
    edad: 1,
    //esto es una funcion
    nombre_raza: function(){
        //se hace uso de un apuntador que llama a los elementos del mismo  this
        //dentro del objeto se pueden accder a los atributos propios del objeto mediante this
        return this.nombre + " " + this.raza;

    },
    mi_funcion_dato: function(){
        return "la edad del gato es: " + this.edad  + " años";
    }

}
console.log(gato.nombre_raza());
console.log(gato.mi_funcion_dato());

//para crear un objeto usando la palabra new 
//new reserva espacio en memoria y cre un nuevo objeto 
let persona_dos = new Object();//una vez instanceado se agragan la propiedades

persona_dos.nombre = "Carlos";//------apartir de esta linea se le asignan propiedades al objeto
persona_dos.direccion = "valle de las palmeras";
persona_dos.telefono = 5513731153;

console.log(persona_dos.nombre);
console.log(persona_dos.direccion);
//de ehcho esta sintaxis no es tan valida pero igual jala 

let persona = {
    nombre: "juan",
    apellido: "escutia",
    email:"jescutia@mail.com",
    edad: 23,
    nombre_completo : function(){
        return this.nombre + " " + this.apellido;
    }
}
console.log(persona.nombre)
//poner el nombre de la propieda a la que queremos acceder entre corchetes
console.log(persona["apellido"])

//for in: para recorrer cada una de las propiedades de nuestro objeto
//es un ciclo for que no permite recorrer todos los elementos de un objeto  
for(propiedad_objeto in persona){
    console.log(persona);
    console.log(persona[propiedad_objeto])
}
//para agragar una propiead a un objeto 
//se debe tener cuidado modificando las propiedades de un elemento de esta forma
persona.nueva_propiedad = "5517323242";//aqi crea una nueva propiedad
persona.nueva_propiedad = "5517812125";//aqui se modifica reescribiendola
console.log(persona);

//para eliminar propiedades de los objetos 
delete persona.nueva_propiedad;
console.log(persona);


//imprimir los valores de un objeto en navegador web
//---concatenacion de valores y propiedades 
console.log(persona.nombre + " " + persona.apellido + persona.edad + persona.email)
//haciendo el uso del for in 
// funcional bonito y poco especifico

for(j in persona){
    console.log(persona[j]);
}
//usando sintaxix objetc.values
//nos regresa el objeto como un arreglo

let personaArray = Object.values(persona);
console.log(personaArray);

//usar una cadena mediante el metodo JSON.stringify
let personaString = JSON.stringify(persona);
console.log(personaString);
//las proiedades son impresas con sus valores en este metodo

//----------------------------METODO GET--------------------------
//mejor practica para modificar las propiedades del objeto
//get: obtener
//set: establecer o modificar
let persona_tres = {
    nombre: "humberto",
    apellido: "perez",
    email:"hperez@mail.com",
    edad:70,
    idioma: "es-mx",
    // nombreCompleto: function(){
    //    return this.nombre + " " + this.apellido
    //}
    get lang(){
        return this.idioma.toUpperCase();//este metodo convierte de min a mayus
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    set modificar_con_set(names){
        this.nombre =  names.toUpperCase();
    },
    //el metodo set se usa para modificar los valores de los atributos de nuestros objetos 
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}
//este metodo hace que parezca que llamas a otro dato pero es una funcion de nada get
console.log(persona_tres.nombreCompleto);
console.log(persona_tres.lang);

persona_tres.lang = "en";
console.log(persona_tres.idioma);
//segundo ejemplo
persona_tres.modificar_con_set = "humberto";//se tiene que brindar el atributo para modificarlo
console.log(persona_tres.nombre);

//................METODO CONSTRUCTOR DE OBJETOS 
//es una funcion especial que nos permite instanciar nuevos obejtos con 
//mismas propiedades y funciones 
//
//funcion constructor de objetos de tipo cohete 
function Rocket(modelo, altura, marca){
    this.modelo = modelo;
    this.altura = altura;
    this.marca = marca;

}
//se instancian los obejtos con la sintaxis new rocket 
let cohete_uno = new Rocket("startship", "57mts", "space_x");
console.log(cohete_uno);

let cohete_dos = new Rocket("falcon_nine", "70mts", "space_x");
console.log(cohete_dos);

cohete_uno.modelo = "soyus";
cohete_uno.marca = "rusia";

console.log(cohete_uno);
console.log(cohete_dos);

//agregar metodos al metodo constructor de objetos 
function Gato(nombre, raza, edad){
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
    this.nombre_raza = function(){
        return this.nombre + " " + this.raza;
    }
    
}

let botas = new Gato("princesa_botas", "siames", 1);
console.log(botas.nombre_raza());
let chappie = new Gato("chappi","atigrado", 2);
console.log(chappie.nombre_raza());
botas.raza = "atigrado";

console.log(botas.nombre_raza());

//prototype agrega propiedades a todos los objetos 
Gato.prototype.domicilio = "valle de las jacarandas numero 100";
console.log(botas.domicilio);
console.log(chappie.domicilio);
//eventualmentes de forma especifica se puede odificar el valor de la propiedad 
botas.domicilio = "lago vallen 82";
console.log(botas.domicilio);

//sintaxis de creacion de objetos 
let miObjeto = new Object();//pero esto no se recomienda
let mi_objeto = {};//esto es exactamento lo mismo 

let mi_cadena_uno = new String('hola');//clase de tipo string llaada mediante su metodo constructor
let mi_cadena_dos = "hola";//esta sintaxis es menos formal pero mas usada

let numero = new Number(2);//igual se crea el objeto con propiedades de numero pero es mucha produccion 
let numero_dos = 2; //keep it simple

let mi_boolean  = new Boolean(true);
let mi_boolean_dos = true;//esto es lo mas recomendable 

let mi_arreglo_uno = new Array();
let mi_arreglo_dos = [];//forma simplificada y cool de hacer un array

let mi_funcion = new Function();

//-----------uso del maodo call----------------------------------
//cal nos permite llamar al metodo de un objeto desde otro objeto 
//let mi_funcion_dos = Function(){}
let persona1 = {
    nombre:"juan",
    apellido:"perez",
    nombreCompleto : function(titulo, tel){//son parametros de la funcion no propiedades del objeto
        return this.nombre + " " + this.apellido +" " +titulo + " " + tel;  ///para metodo apply 
        //return this.nombre + " " + this.apellido +" "+ titulo +": "+ tel;-----para metodo call
    }

}
let persona2 = {
    nombre: "carlos",
    apellido: "lara"
}

//uso de call para utilizar el metodo de persona1.nombrecompleto con los 
//datos del objeto persona2

console.log(persona1.nombreCompleto());

let  y = persona1.nombreCompleto.call(persona2);
console.log(y); 

//para pasar los parametros es necesario conocer el tipo de parametro que se va ceder
let v = persona1.nombreCompleto.call(persona2,"ing", "5517821151");
console.log(v);

//-------------------METODO APPLY---------
//permite mandar a llamar a un metodo en un objeto que no esta permitido en cierto metodo
//el metodo apply manda un arreglo con los varoles de los argumentos que se pasan

let k = persona1.nombreCompleto.apply(persona2);
console.log(k);

let arreglo = ["ing", "51621252"];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));

