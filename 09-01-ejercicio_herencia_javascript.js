//---------------ejercicio HERENCIA JAVASCRIPT---------------------
class Persona{
    static contadorPersona = 0;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;  
        this._idPersona = ++Persona.contadorPersona;
    }
    get idPersona(){
        return this._idPersona;
    }
    get Nombre(){
        return this._nombre;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Apellido(){
        return this._apelido;
    }
    set Apellido(apellido){
        this._apellido = apellido
    }
    get Edad(){
        return this._edad;
    }
    set Edad(edad){
        this._edad = edad;
    }
    todosLosDatos(){
        return this._nombre + " " + this._apellido + " " + this._edad;
    }
    toString(){
        return this.todosLosDatos();
    }
}
class Empleado extends Persona{
    idEmpleado = 0;
    constructor(sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++this.idEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get Sueldo(){
        return this.sueldo;
    }
    set Sueldo(salario){
        this._sueldo = salario;
    }
    //estas se quedan por si no jala toodos los datos-----------------------------------------------
    /*todosLosDatosEmpleado(){
        return this._nombre + " "+ this._apellido +  " " + this._edad + " " + this._idEmpleado + " " + this._sueldo;
    }
    toString(){
        return this.todosLosDatos();
    }*/
    //------------------------------------------------------------------------------------------------
    todosLosDatos(){
        return super.todosLosDatos() + " " + this._idEmpleado + " " + this._sueldo;
    }

}
class Cliente extends Persona{
    idCliente = 0;
    constructor(fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++ this.idCliente;
    }
    get idCliente(){
        return this.idCliente;
    }
    get FechaRegitro(){
        return this._fechaRegistro;
    }
    set FechaRegitro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    //-----------------------------------------------------------------------------------------------------------
    //imprimeTodosDatos(){
    //    return this._nombre + " " + this._apellido + " " + this._edad + " " + this._idCliente + " " + this._fechaRegistro; 
    //}
    //toString(){
    //    return this.imprimeTodosDatos();
    //}
    //----------------------------------------------------------------------------------------------------------
    todosLosDatos(){
        return super.todosLosDatos() + " " + this._idCliente + " " + this._fechaRegistro;
    }
}