"use strict";
var miFuncion = function (a) {
    return a;
};
var miFuncionF = function (a) { return a; };
console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
console.log(miFuncion2(2, 3));
console.log(miFuncion2F(3, 4));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) { return nombre = nombre.toUpperCase(); };
;
var miFuncion3F2 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("george"));
console.log(miFuncion3F("iphone"));
console.log(miFuncion3F2("murio"));
// let hulk = {
//     nombre: "hulk",
//     smash() {
//         console.log(this.nombre+ " smash !!");
//     }
// }
//funcion sin flecha el this. apunta afuera del objeto obj1 
var nombre2 = "bruce1";
var obj1 = {
    nombre2: "hulk1",
    metodo: function () {
        setTimeout(function () {
            console.log(this.nombre2 + (" Smash2!!"));
        }, 1500);
        console.log(this.nombre2 + (" Smash1!!"));
    }
};
//funcion sin flecha el this. dentro afuera del objeto obj1 
var nombre3 = "bruce2";
var obj2 = {
    nombre3: "hulk2",
    metodo: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre3 + (" Smash3!!"));
        }, 1500);
        console.log(this.nombre3 + (" Smash4!!"));
    }
};
//setTimeout( ()=> console.log(this.nombre2 + " smash!!"), 1500);
obj1.metodo();
obj2.metodo();
