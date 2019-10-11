/*
//creación funcion saludar, parametro es nombre
//convertis parametro en string
function saludar(nombre:string) {
    console.log("Hola " + nombre);
}
//creacion de objeto
var Wolverine = {
    nombre: "Logan"
};

//var nombre = "Logan";

//funcion saludar devuelve objeto con atribo string nombre= Logan 
saludar(Wolverine.nombre.toUpperCase());
// saludar(Wolverine.edad);
saludar(Wolverine.nombre.toLowerCase());

 */

---- LET
//let --declara la variable por alcance en .ls aparece distinto nombre de variable
//permite no duplicar variables en el mismo alcance 
let mensaje="Hola";

if(true){
   let mensaje = "Adios";
}

console.log(mensaje);

--- CONSTANTES
//valor "Todas" dentro de esté scope
const OPCIONES= "TODAS";

if(true){
    //valor "ninguna" dentro de esté Scope!
    const OPCIONES = "Ninguna"
};

---tipos de variables
let nombre:string = "Mauricio";
let numero:number = 123;
let bolean:boolean =    true;

let hoy = new Date();

hoy = new Date('1988-04-21');

let cualquiera:any;

cualquiera=nombre;
cualquiera=numero;
cualquiera=bolean;
cualquiera=hoy;

let Mauricio = {
    nombre: "Mauricio",
    edad  :31
};