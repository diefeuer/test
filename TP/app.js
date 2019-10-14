"use strict";
function activar(quien, momento, objeto) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    //objeto = "La Baticuea'";
    if (momento) {
        mensaje = quien + " RIICCAAA : " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " RRIICCA : " + objeto;
    }
    console.log(mensaje);
}
activar("Gorda");
activar("Flaco", "noche");
