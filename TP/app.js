"use strict";
function enviarMision(xman) {
    console.log("Enviando a : " + xman.nombre);
}
;
function enviarCuartel(xman) {
    console.log("Enviado al cuartel a : " + xman.nombre);
}
;
var wolverine = {
    nombre: "wolverine",
    poder: "Regeneración"
};
enviarMision(wolverine);
enviarCuartel(wolverine);
