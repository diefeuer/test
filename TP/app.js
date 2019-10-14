"use strict";
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "droga"
};
//traer info de objeto en una linea (*destructuración)
//{poder:string} = pasa a ser un alias.
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//traer info de objeto
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
console.log(nombre, poder, clave);
var superHeroes = ["thor", "hulk", "tony"];
var a = superHeroes[0], b = superHeroes[1], c = superHeroes[2];
console.log(a, b, c);
