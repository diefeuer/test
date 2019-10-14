interface Xman{
    nombre:string,
    poder:string
}


function enviarMision(xman: Xman){
console.log("Enviando a : " + xman.nombre );

};

function enviarCuartel(xman:Xman){
    console.log("Enviado al cuartel a : "+xman.nombre);
    
};

let wolverine  = {
    nombre: "wolverine",
    poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);