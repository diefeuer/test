"use strict";
function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 31;
//let texto = "Hola " +  nombre + " "+apellido + " "+edad;
var texto = "Hola,\n " + nombre + " " + apellido + " " + edad;
//let texto2:string = `${1+2}`;
var texto2 = "" + getNombre();
console.log(texto2);
