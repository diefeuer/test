"use strict";
//resolve = resolver , reject = rechazar
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promesa terminada");
        //termina bien 
        //resolve();
        //termina mal
        reject();
    }, 1500);
});
console.log("paso 1");
prom1.then(function () {
    console.log("Ejecutar si sale bien");
}, function () {
    console.log("Ejecutar si sale mal");
});
console.log("paso 2");
