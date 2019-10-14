
let avenger = {
    nombre : "Steve",
    clave: "Capitan America",
    poder : "droga"
}

//traer info de objeto en una linea (*destructuración)
//{poder:string} = pasa a ser un alias.
let {nombre,clave,poder} = avenger;

//traer info de objeto
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;


console.log(nombre,poder, clave);

let superHeroes:string[] = ["thor","hulk","tony"];

let [ a, b, c ] = superHeroes;

console.log(a,b,c);
