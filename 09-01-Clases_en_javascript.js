//---------------------------CLASES Y OBJETOS EN JAVASCRIPT---------------------------------------------
class Persona{
    static contadorPersonas = 0;//atributo de nuestra clase

    //varibles estatic de tipo no dinamica pero sin el uso de const 
    static get MAX_OBJ(){
        return 5;//maximo de objeto que puede crear esta clase 
    }
    constructor(nombres, apellido, email, edad ){
        this._nombres = nombres;
        this._apellido = apellido;
        this._email = email;
        this._edad = edad;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){ 
            this.idPersona = ++ Persona.contadorPersonas;//se tiene que instanciar con todo y clase
        }else{
            console.log("Se han superado el maximo de objetos permitidos");
        }
    } 
    //metodo get.................(su uso es una buena praxis)
    get nombres(){// este solocita la info nada mas 
        return this._nombres;
    }
    //metodo set (modificar)
    set nombres(nombres){  //este la modifica por eso se pueden llamar igual
        this._nombres = nombres;
    }
    datosUsuario(){
        return this._nombres + " " +  this._apellido + " "+ this.idPersona; 
    }
}




let persona_uno = new Persona("juan", "perez", "jperez@mail.com", 23);
//console.log(persona_uno);
//asi podemos acceder a las propiedades especificas de los elementos
console.log(persona_uno.nombre);
persona_uno.nombre = "juan carlos"
console.log(persona_uno.nombre);
console.log(persona_uno.datosUsuario());

let persona2 = new Persona("karla","ramirez","kramire@mail.com",23);
console.log(persona2.datosUsuario());
console.log(Persona.contadorPersonas);
console.log(Persona.MAX_OBJ);
//al no tener un metodo set MAX_OBJ no se modificara
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);//el resultado india que no fue alterado
let persona3 = new Persona("jose","ramirez","kramire@mail.com",23);
let persona4 = new Persona("ramiro","ramirez","rramire@mail.com",23);
let persona5 = new Persona("angel","ramirez","aramire@mail.com",23);
let persona6 = new Persona("brenda","ramirez","bramire@mail.com",23);
console.log(persona6.datosUsuario());
//let persona_dos = new Persona("jose", "muñoz", "jmuñoz@mail.com", 34);
//console.log(persona_dos);

//--------------HOISTING--------------------------
//no se pueden crear objetos antes de declarar la clase
//let persona_tres = Persona_dos("karla", "juarez"); <-----por ejemplo aqui da un error
class Persona_dos{
    //este atributo se asocia directamente con la clase no con los objetos 
    static contador_objetos_persona = 0;//no se debe acceder con la referencia de un objeto 
    //this solo apunta a los objetos y no las clases no usar para la varible static instanciada 
    //se incremena cada que se manda a llamar el constructor 
    
    email = "valor default email"; //este atributo se asocia con los objetos 
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido; 
        this._edad = edad;
        Persona_dos.contador_objetos_persona++;//solo se accede a la varible desde la clase

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){//muestra especificamente el atributo apellido 
        return this._apellido;
    }
    set apellido(apellido){//permi modificar el elemento apellido 
        this._apellido = apellido;
    }
    //dentro de una clase no es neesario poner la palabra funcion
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }
    //sobreescribiendo el metodo de la clase padre (object)
    toString(){
        //se aplica polimorfismo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("saludos desde metodo static");
    }
    static saludar_dos(persona){
        console.log(persona.nombre);//se pasa como parametro el objeto persona
    }

}

//UMLEtino lengujae uml que sirve como documentacion de nuestro projectos 
//-----------------CLASE PADRE Y CLASE HIJA------------
//para heredar de una clase padre se usa la palabra reservada extends + el nombre de la clase
class Empleado extends Persona_dos {
    constructor(nombre, apellido,departamento){
//para instanciar un elemento de la clase padre se requiere hacer uso de la palabra reservada super
//el objeto de tipo empleado engloba la clase padre persona  
        super(nombre, apellido); //llamamos al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //..........sobreescritura........
    nombreCompleto(){
        //return this._nombre + " " + this._apellido + ", " + this._departamento;
        return super.nombreCompleto() + " " + this._departamento;//con super retulizamos las variables del metodo en la clase padre
    }
}
//---------------clase Persona_dos
let persona_dos = new Persona_dos("jose", "sosa");
console.log(persona_dos.nombreCompleto());
//para acceder a el atributo email de la clase Persona_dos
console.log(persona_dos.email);//atributo no estatico
//--------------------------------------------------------
console.log(persona_dos.toString());
//polimorfismo

let empleado_uno = new Empleado("maria", "gil", "defensa");
console.log(empleado_uno.departamento);
console.log(empleado_uno.apellido);
console.log(empleado_uno.nombre);

//---------------------HERENCIA DE METODOS-----------------------
//con que la funcion ete declarada en la clase principal puede ser usara debido a las propiedades 
//de la herencia

console.log(empleado_uno.nombreCompleto());

//-------------SOBRESCRITURA------------------------------
//cuando la clase padre desconce un atributo de una clase hija no puede trabajr con este 
//modificar el comportamiento de un metodo definido en la clase padre
console.log(empleado_uno.nombreCompleto());//qui y amuestra su puesto


//ejemplo: class Persona extgendas Object (todos son clases hijas de object)
//Debido a que todas son hijas de la clase padre object todas heredan los atributos de la clase padre
//como las funciones definidas dentro de los metodos de la clase padre
//---------------------METODO TO STRINGH-------------------------
//PERMITE MANDAR A IMPRIMIR INFORMACION DEL ESTADO DEL OBJETO
console.log(empleado_uno.toString());//debido a que solo arroja object se reescribe;
//polimorfismo: desde un objeto podemos manar a llamar un metodo definido en la clase padre o la clase hija
//el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo!


//-------------uso de la palabra static-------------------------------
//asociasion de elementos unicamente a la clase que pertenecen 
//persona_dos.saludar();//un metodos statico se asocia con una clase pero no con el objeto
Persona_dos.saludar();
//perooo a un metodo estatico si se le puden pasar argumentos con un objeto
Persona_dos.saludar_dos(persona_dos);//imprime el nombre pero en consola

Empleado.saludar();//tambien hereda la funcionalidad del metodo estatico
Empleado.saludar_dos(empleado_uno);

// esto no se hace!
console.log(persona_dos.contador_objetos_persona);//don't  do it 
//el atributo se asocia al objeto y no a la clase
//en el caso de abajo se asocia a la clase directamente
console.log(Persona_dos.contador_objetos_persona);
//desde la clase hija 
console.log(Empleado.contador_objetos_persona);//la clase hereda el atributo estatico
//la variable contador_objetos persona aumenta cada que se hace uso del metodo constructor 
//tambien la clase hija puede acceder al atributo no static de la clase padre
console.log(empleado_uno.email);
console.log(Empleado.email);//esto no se puede

//las varibles estaticas en los diagramas uml bienen subrayadas