"use strict";
function activar(quien, momento, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    //objeto = "La Baticuea'";
    if (momento) {
        mensaje = quien + " activo : " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activo : " + objeto;
    }
    console.log(mensaje);
}
activar("Gordo");
activar("Flaco", "noche");
